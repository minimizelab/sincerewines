import React, { FunctionComponent } from 'react';
import { combineClasses } from '../utils/helpers';

interface Props {
  white?: boolean;
  onClick: () => void;
}

const Button: FunctionComponent<Props> = ({ children, white, onClick }) => (
  <button
    onClick={onClick}
    className={combineClasses([
      'border py-3 px-6 flex items-center justify-center',
      { 'border-sincere-green': !white, 'border-white': white },
    ])}
  >
    <span
      className={combineClasses([
        'uppercase tracking-wider text-xs font-sans',
        { 'text-sincere-green': !white, 'text-white': white },
      ])}
    >
      {children}
    </span>
  </button>
);

export default Button;
