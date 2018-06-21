export const fetchImage = () => {
  const randomSize = Math.floor(Math.random() * (800 - 400 + 1)) + 400;
  const url = `//unsplash.it/${randomSize}`;
  return url;
};

export function updateObject(oldObject, newValues) {
  return { ...oldObject, ...newValues };
}

export function updateArray(oldArray, newValues, spreadNewValue = false) {
  if (spreadNewValue) return [...oldArray, ...newValues];

  return [...oldArray, newValues];
}

export function updateItemInArray(
  array,
  itemId,
  idType = '_id',
  updateItemCallback,
) {
  const updatedItems = array.map(item => {
    /* just return every other item in array your not updating */
    if (item[idType] !== itemId) return item;

    // callback used to specify HOW to update item
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}

export function decorateItemsInArray(array, newItem) {
  const itemType = typeof array[0];

  if (itemType === 'object') {
    return array.map(item => updateObject(item, newItem));
  } else if (Array.isArray(itemType)) {
    return array.map(item => updateArray(item, newItem));
  }
}

export function findItemInArray(array, itemId, queryType = '_id') {
  return array.find(item => item[queryType] === itemId);
}

export function removeItemInArray(array, itemId) {
  return array.filter(item => item._id !== itemId);
}
