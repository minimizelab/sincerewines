import { SET_MENU_OPEN, ActionTypes } from './types';
import { SET_COOKIE_DIALOG_OPEN } from './types';

export const setMenuOpen = (payload: boolean): ActionTypes => ({
  type: SET_MENU_OPEN,
  payload,
});

export const setDialogOpen = (payload: boolean): ActionTypes => ({
  type: SET_COOKIE_DIALOG_OPEN,
  payload,
});
