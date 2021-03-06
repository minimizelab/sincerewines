import React, { FunctionComponent } from 'react';
import TextUppercase from '../atoms/TextUppercase';
import { combineClasses } from '../utils/functions';

interface Props {
  white?: boolean;
  onClick: () => void;
  className?: string;
}

const Button: FunctionComponent<Props> = ({
  children,
  white,
  onClick,
  className,
}) => (
  <button
    onClick={onClick}
    className={combineClasses([
      'border py-3 px-6 flex items-center justify-center',
      { 'border-sincere-green': !white, 'border-white': white },
      className,
    ])}
  >
    <TextUppercase white={white}>{children}</TextUppercase>
  </button>
);

export default Button;
