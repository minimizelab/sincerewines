import React from 'react';
import ArrowLink from '../atoms/ArrowLink';

const MailLink = () => (
  <ArrowLink className="text-4xl" lowercase to="mailto:info@sincerewines">
    info@sincerewines.se
  </ArrowLink>
);

export default MailLink;
