import React, { FunctionComponent } from 'react';
import { combineClasses } from '@minimizelab/mini_utils';

interface Props {
  className?: string;
  white?: boolean;
}

const TextUppercase: FunctionComponent<Props> = ({
  className,
  children,
  white,
}) => (
  <p
    className={combineClasses([
      className,
      'uppercase tracking-wider text-xs font-sans',
      { 'text-sincere-green': !white, 'text-white': white },
    ])}
  >
    {children}
  </p>
);

export default TextUppercase;
