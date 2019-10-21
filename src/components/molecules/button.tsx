import React, { FunctionComponent } from 'react';

interface Props {
  text: string;
}

const Button: FunctionComponent<Props> = ({ text }) => (
  <button className="border border-black py-3 px-5">
    <span className="uppercase tracking-wider text-xs">{text}</span>
  </button>
);

export default Button;
