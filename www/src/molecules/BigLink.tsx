import React, { FunctionComponent } from 'react';
import ArrowLink from '../atoms/ArrowLink';

interface Props {
  to: string;
  title: string;
}

const BigLink: FunctionComponent<Props> = ({ to, title }) => (
  <ArrowLink className="text-2xl sm:text-4xl" lowercase to={to}>
    {title}
  </ArrowLink>
);

export default BigLink;
