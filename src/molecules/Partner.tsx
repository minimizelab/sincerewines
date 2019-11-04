import React, { FunctionComponent } from 'react';
import Text from '../atoms/Text';

interface Props {
  name: string;
  email: string;
  phone: string;
}

const Partner: FunctionComponent<Props> = ({ name, email, phone }) => (
  <div className="flex flex-col justify-between sm:w-1/2 py-4 w-full">
    <Text className="font-bold">{name}</Text>
    <Text>{email}</Text>
    <Text>{phone}</Text>
  </div>
);

export default Partner;
