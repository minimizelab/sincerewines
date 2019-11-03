import React, { FunctionComponent, useState } from 'react';
import Link from './Link';
import ArrowRightGreen from './ArrowRightGreen';
import Text from './Text';
import { combineClasses } from '../utils/helpers';

interface Props {
  to: string;
}

const ArrowLink: FunctionComponent<Props> = ({ children, to }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      className="flex flex-row"
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ArrowRightGreen hover={hover} />
      <Text
        className={combineClasses([
          'uppercase ml-2',
          { 'text-sincere-wine ': hover, 'text-sincere-green': !hover },
        ])}
      >
        {children}
      </Text>
    </Link>
  );
};

export default ArrowLink;
