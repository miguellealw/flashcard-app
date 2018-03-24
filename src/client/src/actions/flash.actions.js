export function successFlash(message) {
  return {
    type: "FLASH_SUCCESS",
    status: "success",
    message,
  };
}

export function errorFlash(message) {
  return {
    type: "FLASH_FAILURE",
    status: "error",
    message,
  };
}

export function clearFlash() {
  return {
    type: "FLASH_CLEAR",
  };
}

export const displayFlash = (
  dispatch,
  { status = "success", message, duration = 3000, shouldClear = true },
) => {
  if (status === "success") dispatch(successFlash(message));
  else dispatch(errorFlash(message));

  if (shouldClear) setTimeout(() => dispatch(clearFlash()), duration);
};
