import { SET_MENU_OPEN } from './types';
import { SET_COOKIE_DIALOG_OPEN } from './types';

export const setMenuOpen = (payoad: boolean) => ({
  type: SET_MENU_OPEN,
  payoad,
});

export const setDialogOpen = (payload: boolean) => ({
  type: SET_COOKIE_DIALOG_OPEN,
  payload
})