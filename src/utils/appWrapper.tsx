import React, { FunctionComponent, ReactNode } from 'react';
import { Provider } from 'react-redux';
import createStore from '../store';

interface Props {
  element: ReactNode;
}

const AppWrapper: FunctionComponent<Props> = ({ element }) => {
  const store = createStore();
  return <Provider store={store}>{element}</Provider>;
};

export default AppWrapper;
