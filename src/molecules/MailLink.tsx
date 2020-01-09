import React, { FunctionComponent } from 'react';
import ArrowLink from '../atoms/ArrowLink';

const MailLink: FunctionComponent = () => (
  <ArrowLink
    className="text-2xl sm:text-4xl"
    lowercase
    to="mailto:info@sincerewines.com"
  >
    info@sincerewines.com
  </ArrowLink>
);

export default MailLink;
