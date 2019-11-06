import React from 'react';
import ArrowLink from '../atoms/ArrowLink';

const MailLink = () => (
  <ArrowLink className="text-2xl sm:text-4xl" lowercase to="mailto:info@sincerewines.com">
    info@sincerewines.com
  </ArrowLink>
);

export default MailLink;
