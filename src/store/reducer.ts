import { Reducer } from 'redux';
import { State, ActionTypes, SET_MENU_OPEN, SET_COOKIE_DIALOG_OPEN } from './types';

const initialState: State = {
  menuOpen: false,
  cookieDialogOpen: true,
};

const reducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_OPEN:
      return {
        ...state,
        menuOpen: action.payload,
      };
    case SET_COOKIE_DIALOG_OPEN:
      return {
        ...state,
        cookieDialogOpen: action.payload,
      }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
