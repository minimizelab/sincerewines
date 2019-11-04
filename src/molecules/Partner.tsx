import React, { FunctionComponent } from 'react';
import Text from '../atoms/Text';
import Link from '../atoms/Link';

interface Props {
  name: string;
  email: string;
  phone: string;
}

const Partner: FunctionComponent<Props> = ({ name, email, phone }) => (
  <div className="flex flex-col justify-between sm:w-1/2 py-4 w-full">
    <Text className="font-bold">{name}</Text>
    <Link to={`mailto:${email}`}>{email}</Link>
    <Link to={`tel:${email}`}>{phone}</Link>
  </div>
);

export default Partner;
