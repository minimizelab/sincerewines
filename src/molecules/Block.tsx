import React, { FunctionComponent } from 'react';
import H4 from '../atoms/H4';
import { combineClasses } from '../utils/helpers';

interface Props {
  center?: boolean;
  title: string;
}

const Block: FunctionComponent<Props> = ({ title, children, center }) => (
  <div
    className={combineClasses([
      'flex flex-col p-4 w-full sm:w-1/3 min-w-0 lg:min-w-250',
      { 'text-center': center, 'text-left': !center },
    ])}
  >
    <H4 className="mb-4">{title}</H4>
    {children}
  </div>
);

export default Block;
