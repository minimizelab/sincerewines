import React, { FunctionComponent, useState } from 'react';
import Block from '../molecules/Block';
import ArrowRightGreen from '../atoms/ArrowRight';
import { navigate } from 'gatsby';
import Text from '../atoms/Text';

interface Props {
  title: string;
  to: string;
}
const DetailedLink: FunctionComponent<Props> = ({ title, to, children }) => {
  const [hover, setHover] = useState(false);
  return (
    <Block
      className="cursor-pointer"
      onClick={(): void => {
        navigate(to);
      }}
      onMouseEnter={(): void => setHover(true)}
      onMouseLeave={(): void => setHover(false)}
      center
      title={title}
    >
      <Text className="mb-4">{children}</Text>
      <ArrowRightGreen hover={hover} />
    </Block>
  );
};

export default DetailedLink;
