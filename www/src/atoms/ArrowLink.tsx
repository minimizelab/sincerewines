import React, { FunctionComponent, useState } from 'react';
import Link from './Link';
import ArrowRightGreen from './ArrowRight';
import { combineClasses } from '@minimizelab/mini_utils';

interface Props {
  to: string;
  lowercase?: boolean;
  className?: string;
}

const ArrowLink: FunctionComponent<Props> = ({
  children,
  to,
  lowercase = false,
  className = '',
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      className="flex flex-row items-center"
      to={to}
      onMouseEnter={(): void => setHover(true)}
      onMouseLeave={(): void => setHover(false)}
    >
      <ArrowRightGreen hover={hover} />
      <span
        className={combineClasses([
          'ml-2 tracking-wide font-sans text-sm sm:text-base',
          className,
          { 'text-sincere-grape': hover, 'text-sincere-green': !hover },
          { lowercase: lowercase, uppercase: !lowercase },
        ])}
      >
        {children}
      </span>
    </Link>
  );
};

export default ArrowLink;
