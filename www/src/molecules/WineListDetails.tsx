import React, { FunctionComponent } from 'react';
import TextUppercase from '../atoms/TextUppercase';

interface Props {
  title: string;
}

const WineListDetails: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div className="px-4">
      <TextUppercase>{title}</TextUppercase>
      {children}
    </div>
  );
};

export default WineListDetails;
