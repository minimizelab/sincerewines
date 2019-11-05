import React, { FunctionComponent } from 'react';
import Link from '../atoms/Link';

interface Props {
  to: string;
  text: string;
  onClick?: () => void;
}

const NavLink: FunctionComponent<Props> = ({ to, text, onClick }) => (
  <Link
    onClick={onClick}
    className="capitalize px-5 my-2 text-lg lg:m-0 hover:text-sincere-grape"
    activeClassName="text-sincere-grape"
    to={to}
  >
    {text}
  </Link>
);

export default NavLink;
