import { SET_MENU_OPEN } from './types';

export const setMenuOpen = (payoad: boolean) => ({
  type: SET_MENU_OPEN,
  payoad,
});
