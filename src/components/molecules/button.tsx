import React, { FunctionComponent } from 'react';

interface Props {
  text: string;
}

const Button: FunctionComponent<Props> = ({ text }) => (
  <button className="border border-black py-3 px-5">
    <h5 className="uppercase tracking-wider text-xs">{text}</h5>
  </button>
);

export default Button;
