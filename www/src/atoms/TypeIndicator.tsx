import React, { FunctionComponent } from 'react';
import { combineClasses } from '@minimizelab/mini_utils';
import { WineType } from '../types/types';

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
        'bg-sincere-wine': type === 'red',
        'bg-sincere-riesling': type === 'white',
        'bg-sincere-rose': type === 'rose',
      },
    ])}
  ></div>
);

export default TypeIndicator;
