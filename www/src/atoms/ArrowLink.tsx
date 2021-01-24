import React, { FunctionComponent, useState } from 'react';
import Link from './Link';
import Arrow from './Arrow';
import { combineClasses } from '../utils/functions';

interface Props {
  to: string;
  lowercase?: boolean;
  className?: string;
  left?: boolean;
}

const ArrowLink: FunctionComponent<Props> = ({
  children,
  to,
  lowercase = false,
  className = '',
  left = false,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <span
      onMouseEnter={(): void => setHover(true)}
      onMouseLeave={(): void => setHover(false)}
    >
      <Link className="flex flex-row items-center whitespace-no-wrap" to={to}>
        <Arrow left={left} hover={hover} />
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
    </span>
  );
};

export default ArrowLink;
