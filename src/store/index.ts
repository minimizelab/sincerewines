import { createStore, Store } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { State, ActionTypes } from './types';

export default (): Store<State, ActionTypes> =>
  createStore(reducer, composeWithDevTools());
