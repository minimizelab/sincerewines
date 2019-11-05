import React, { FunctionComponent } from 'react';
import Link from './Link';

const Logotype: FunctionComponent = () => (
  <Link
    defaultStyling={false}
    to="/"
    className="font-serif md:text-3xl text-2xl text-sincere-green"
  >
    Sincere Wines
  </Link>
);

export default Logotype;
