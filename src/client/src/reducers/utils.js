export function updateObject(oldObject, newValues) {
  return { ...oldObject, ...newValues };
}

export function updateArray(oldArray, newValues, spreadNewValue = false) {
  if (spreadNewValue) return [...oldArray, ...newValues];

  return [...oldArray, newValues];
}

export function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map(item => {
    /* just return every other item in array your not updating */
    if (item._id !== itemId) return item;

    // callback used to specify HOW to update item
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}

export function findItemInArray(array, itemId, queryType = "_id") {
  return array.find(item => item[queryType] === itemId);
}

export function removeItemInArray(array, itemId) {
  return array.filter(item => item._id !== itemId);
}
