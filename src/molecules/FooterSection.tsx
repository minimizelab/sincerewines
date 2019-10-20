import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
}

const FooterSection: FunctionComponent = ({ title, children }) => (
  <div className="flex flex-col m-4 w-full sm:w-auto">
    <h3 className="font-serif text-xl mb-4">{title}</h3>
    {children}
  </div>
);

export default FooterSection;
