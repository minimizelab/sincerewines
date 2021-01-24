import React from 'react';
import { C } from '../types/types';
import Link from './Link';

const Logotype: C = () => (
  <Link
    defaultStyling={false}
    to="/"
    className="font-serif md:text-3xl text-2xl text-sincere-green"
  >
    SincereWines
  </Link>
);

export default Logotype;
