/* eslint-disable react/display-name */
import React, { ReactNode } from 'react';
import Text from '../atoms/Text';
import TextLarge from '../atoms/TextLarge';
import ArrowLink from '../atoms/ArrowLink';
// import { useSanityImage, Image } from '@minimizelab/mini_ui-react';
// import { getImageUrl } from '@sanity/block-content-to-react';
import H4 from '../atoms/H4';
import BigLink from '../molecules/BigLink';

export const wineSerializers = {
  types: {
    block: (props: any): ReactNode => (
      <Text className="py-2">{props.children}</Text>
    ),
  },
};

export const pageSerializers = {
  types: {
    block: (props: any): ReactNode => {
      return props.node.style === 'h4' ? (
        <H4 className="my-4">{props.children}</H4>
      ) : (
        <TextLarge className="my-2">{props.children}</TextLarge>
      );
    },
    link: (props: any): ReactNode =>
      props.node.size === 'Big' ? (
        <BigLink to={props.node.link} title={props.node.title} />
      ) : (
        <ArrowLink className="my-2" to={props.node.link}>
          {props.node.title}
        </ArrowLink>
      ),
    // TODO: Use custom image component here
    // image: (props: any): ReactNode => {
    //   const imgProps = useSanityImage({
    //     baseUrl: getImageUrl(props),
    //     blurUp: true,
    //     size: { width: 1440 },
    //   });
    //   console.log(props);
    //   return <Image {...imgProps} aspectRatio={1} />;
    // },
  },
};

export const greetingSerializer = {
  types: {
    block: (props: any): ReactNode => (
      <TextLarge className="py-2">{props.children}</TextLarge>
    ),
    link: (props: any): ReactNode =>
      props.node.size === 'Big' ? (
        <BigLink to={props.node.link} title={props.node.title} />
      ) : (
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
