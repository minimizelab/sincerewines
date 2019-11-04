import React, { FunctionComponent } from 'react';
import TextUppercase from '../atoms/TextUppercase';
import Text from '../atoms/Text';

interface Props {
  title: string;
  value: string;
}

const WineRow: FunctionComponent<Props> = ({ title, value }) => (
  <div className="flex flex-row justify-between items-center my-2">
    <TextUppercase>{title}</TextUppercase>
    <Text>{value}</Text>
  </div>
);

export default WineRow;
