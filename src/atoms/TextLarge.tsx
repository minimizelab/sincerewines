import React, { FunctionComponent } from 'react';
import { combineClasses } from '../utils/helpers';

interface Props {
  className?: string;
  white?: boolean;
}

const TextLarge: FunctionComponent<Props> = ({
  className,
  children,
  white,
}) => (
  <p
    className={combineClasses([
      className,
      'font-sans text-xl',
      { 'text-sincere-green': !white, 'text-white': white },
    ])}
  >
    {children}
  </p>
);

export default TextLarge;
