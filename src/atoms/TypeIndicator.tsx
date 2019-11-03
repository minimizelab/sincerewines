import React, { FunctionComponent } from 'react';
import { combineClasses } from '../utils/helpers';

interface Props {
  className?: string;
  type: string;
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
