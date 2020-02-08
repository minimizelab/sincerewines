import React, { FunctionComponent } from 'react';
import { combineClasses } from '@minimizelab/mini_utils';

interface Props {
  white?: boolean;
  className?: string;
}

const H4: FunctionComponent<Props> = ({ children, white, className }) => (
  <h4
    className={combineClasses([
      'font-serif text-xl sm:text-2xl',
      className,
      { 'text-sincere-green': !white, 'text-white': white },
    ])}
  >
    {children}
  </h4>
);

export default H4;
