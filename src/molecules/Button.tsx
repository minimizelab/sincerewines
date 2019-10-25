import React, { FunctionComponent } from 'react';
import { combineClasses } from '../utils/helpers';

interface Props {
  text: string;
  dark: boolean;
  onClick: () => void;
}

const Button: FunctionComponent<Props> = ({ text, dark, onClick }) => (
  <button
    onClick={onClick}
    className={combineClasses([
      'border py-3 px-5',
      { 'border-black': dark, 'border-white': !dark },
    ])}
  >
    <span className="uppercase tracking-wider text-xs font-sans">{text}</span>
  </button>
);

export default Button;
