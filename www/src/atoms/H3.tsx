import React, { FunctionComponent } from 'react';
import { combineClasses } from '../utils/functions';

interface Props {
  white?: boolean;
  className?: string;
}

const H3: FunctionComponent<Props> = ({ children, white, className }) => (
  <h3
    className={combineClasses([
      'font-serif text-3xl',
      className,
      { 'text-sincere-green': !white, 'text-white': white },
    ])}
  >
    {children}
  </h3>
);

export default H3;
