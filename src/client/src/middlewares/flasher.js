import { displayFlash } from '../actions/flash.actions';

export const flasher = store => next => action => {
  if (!action.flash) return next(action);
  const {
    flash: { message, status },
  } = action;

  displayFlash(store.dispatch, {
    status,
    message,
  });
  return next(action);
};
