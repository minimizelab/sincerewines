export const SET_MENU_OPEN = 'SET_MENU_OPEN';

export interface State {
  menuOpen: boolean;
}

interface SetMenuOpenAction {
  type: typeof SET_MENU_OPEN;
  payload: boolean;
}

export type ActionTypes = SetMenuOpenAction;
