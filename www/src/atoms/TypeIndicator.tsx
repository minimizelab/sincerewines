import React, { FunctionComponent } from 'react';
import { WineType } from '../types/types';
import { combineClasses } from '../utils/functions';

interface Props {
  className?: string;
  type: WineType;
}

const TypeIndicator: FunctionComponent<Props> = ({ className, type }) => (
  <div
    className={combineClasses([
      'flex rounded-full w-6 h-6',
      className,
      {
        'bg-sincere-wine': type === 'Red',
        'bg-sincere-riesling': type === 'White',
        'bg-sincere-rose': type === 'Rose',
      },
    ])}
  ></div>
);

export default TypeIndicator;
