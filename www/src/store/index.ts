import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import ui from './ui';
import list from './list';

const reducer = combineReducers({
  list,
  ui,
});

const store = configureStore({ reducer });

export type State = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
