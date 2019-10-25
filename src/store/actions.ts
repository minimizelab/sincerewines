import { SET_MENU_OPEN } from './types';
import { SET_COOKIE_DIALOG_OPEN } from './types';

export const setMenuOpen = (payload: boolean) => ({
  type: SET_MENU_OPEN,
  payload,
});

export const setDialogOpen = (payload: boolean) => ({
  type: SET_COOKIE_DIALOG_OPEN,
  payload
})