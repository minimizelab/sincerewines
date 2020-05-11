import React, { FunctionComponent } from 'react';
import TextUppercase from '../atoms/TextUppercase';

interface Props {
  title: string;
}

const WineListDetails: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div className="pr-6 lg:px-4 whitespace-no-wrap">
      <TextUppercase>{title}</TextUppercase>
      {children}
    </div>
  );
};

export default WineListDetails;
