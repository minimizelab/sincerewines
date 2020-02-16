import React, { FunctionComponent, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

interface Props {
  element: ReactNode;
}

const AppWrapper: FunctionComponent<Props> = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};

export default AppWrapper;
