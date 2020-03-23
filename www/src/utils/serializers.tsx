/* eslint-disable react/display-name */
import React, { ReactNode } from 'react';
import Text from '../atoms/Text';
import TextLarge from '../atoms/TextLarge';
import ArrowLink from '../atoms/ArrowLink';

export const wineSerializers = {
  types: {
    block: (props: any): ReactNode => (
      <Text className="py-2">{props.children}</Text>
    ),
  },
};

export const pageSerializers = {
  types: {
    block: (props: any): ReactNode => (
      <TextLarge className="my-2">{props.children}</TextLarge>
    ),
    arrowLink: (props: any): ReactNode => (
      <ArrowLink className="my-2" to={props.node.link}>
        {props.node.title}
      </ArrowLink>
    ),
  },
};

export const greetingSerializer = {
  types: {
    block: (props: any): ReactNode => (
      <TextLarge className="py-2">{props.children}</TextLarge>
    ),
    arrowLink: (props: any): ReactNode => (
      <ArrowLink className="my-4" to={props.node.link}>
        {props.node.title}
      </ArrowLink>
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
