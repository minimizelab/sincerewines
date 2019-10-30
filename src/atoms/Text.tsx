import React, { FunctionComponent } from 'react';
import { combineClasses } from '../utils/helpers';

interface Props {
  className?: string;
  white?: boolean;
}

const Text: FunctionComponent<Props> = ({ className, children, white }) => (
  <p
    className={combineClasses([
      className,
      'font-sans text-base',
      { 'text-sincere-green': !white, 'text-white': white },
    ])}
  >
    {children}
  </p>
);

export default Text;
