/* eslint-disable react/display-name */
import React, { ReactNode } from 'react';
import Text from '../atoms/Text';

export const wineSerializers = {
  types: {
    block: (props: any): ReactNode => (
      <Text className="py-2">{props.children}</Text>
    ),
  },
};

export const producerSerializers = {
  types: {
    block: (props: any): ReactNode => (
      <Text className="py-2">{props.children}</Text>
    ),
  },
};
