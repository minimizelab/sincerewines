import React, { FunctionComponent } from 'react';
import { combineClasses } from '../utils/helpers';

interface Props {
  white?: boolean;
  className?: string;
}

const H5: FunctionComponent<Props> = ({ children, white, className }) => (
  <h5
    className={combineClasses([
      'font-serif text-lg sm:text-xl',
      className,
      { 'text-sincere-green': !white, 'text-white': white },
    ])}
  >
    {children}
  </h5>
);

export default H5;
