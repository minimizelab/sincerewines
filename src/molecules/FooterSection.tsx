import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
}

const FooterSection: FunctionComponent = ({ title, children }) => (
  <div className="flex flex-col p-4 w-full sm:w-1/3 min-w-0 lg:w-auto lg:min-w-250">
    <h3 className="font-serif text-xl mb-4">{title}</h3>
    {children}
  </div>
);

export default FooterSection;
