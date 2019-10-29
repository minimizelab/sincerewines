import React, { FunctionComponent } from 'react';
import { combineClasses } from '../utils/helpers';

interface Props {
  white?: boolean;
  className?: string;
}

const H4: FunctionComponent<Props> = ({ children, white, className }) => (
  <h4
    className={combineClasses([
      'font-serif text-2xl',
      { 'text-sincere-green': !white, 'text-white': white },
      className,
    ])}
  >
    {children}
  </h4>
);

export default H4;
