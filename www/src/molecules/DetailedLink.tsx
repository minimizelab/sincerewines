import React, { FunctionComponent, useState } from 'react';
import Block from '../molecules/Block';
import Arrow from '../atoms/Arrow';
import Text from '../atoms/Text';
import { useRouter } from 'next/router';

interface Props {
  title: string;
  to: string;
  left?: boolean;
}
const DetailedLink: FunctionComponent<Props> = ({
  title,
  to,
  children,
  left = false,
}) => {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  return (
    <Block
      className="cursor-pointer"
      onClick={(): void => {
        router.push(to);
      }}
      onMouseEnter={(): void => setHover(true)}
      onMouseLeave={(): void => setHover(false)}
      center
      title={title}
    >
      <Text className="mb-4">{children}</Text>
      <Arrow left={left} hover={hover} />
    </Block>
  );
};

export default DetailedLink;
