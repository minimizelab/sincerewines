import React, { FunctionComponent, HTMLProps } from 'react';
import H4 from '../atoms/H4';
import { combineClasses } from '../utils/helpers';

interface Props extends HTMLProps<HTMLDivElement> {
  center?: boolean;
  title: string;
}

const Block: FunctionComponent<Props> = ({
  title,
  children,
  center,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={combineClasses([
      className,
      'flex flex-col pt-4 pb-6 px-8 w-full sm:w-1/3 min-w-0 lg:min-w-250 h-full',
      { 'text-center': center, 'text-left': !center },
    ])}
  >
    <H4 className="mb-2">{title}</H4>
    <div
      className={combineClasses([
        'flex flex-col',
        { 'items-center': center, 'items-start': !center },
      ])}
    >
      {children}
    </div>
  </div>
);

export default Block;
