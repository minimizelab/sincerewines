import React, { FunctionComponent } from 'react';
import { combineClasses } from '../utils/helpers';

interface Props {
  className?: string;
  white?: boolean;
}

const Quote: FunctionComponent<Props> = ({ className, children, white }) => (
  <p
    className={combineClasses([
      className,
      'font-sans text-xl sm:text-2xl italic tracking-wide',
      { 'text-sincere-green': !white, 'text-white': white },
    ])}
  >
    {children}
  </p>
);

export default Quote;
