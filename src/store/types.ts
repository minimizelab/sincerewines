export const SET_MENU_OPEN = 'SET_MENU_OPEN';
export const SET_COOKIE_DIALOG_OPEN = 'SET_COOKIE_DIALOG_OPEN';

export interface State {
  menuOpen: boolean;
  cookieDialogOpen: boolean;
}

interface SetMenuOpenAction {
  type: typeof SET_MENU_OPEN;
  payload: boolean;
}

interface setCookieDialogOpenAction {
  type: typeof SET_COOKIE_DIALOG_OPEN;
  payload: boolean;
}

export type ActionTypes = SetMenuOpenAction | setCookieDialogOpenAction;
