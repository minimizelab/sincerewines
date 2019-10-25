import React, { FunctionComponent } from 'react';
import Link from '../atoms/Link';

interface Props {
  to: string;
  text: string;
}

const NavLink: FunctionComponent<Props> = ({ to, text }) => (
  <Link className="capitalize px-5" to={to}>
    {text}
  </Link>
);

export default NavLink;
