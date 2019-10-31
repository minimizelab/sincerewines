import React, { FunctionComponent } from 'react';
import { combineClasses } from '../utils/helpers';

interface Props {
  white?: boolean;
  className?: string;
}

const H1: FunctionComponent<Props> = ({ children, white, className }) => (
  <h1
    className={combineClasses([
      'font-serif text-4xl',
      { 'text-sincere-green': !white, 'text-white': white },
    ])}
  >
    {children}
  </h1>
);

export default H1;
