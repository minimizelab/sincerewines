import { Reducer } from 'redux';
import { State, ActionTypes, SET_MENU_OPEN } from './types';

const initialState: State = {
  menuOpen: false,
};

const reducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_OPEN:
      return {
        ...state,
        menuOpen: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
