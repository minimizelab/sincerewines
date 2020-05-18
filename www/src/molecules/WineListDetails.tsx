import React, { FunctionComponent } from 'react';
import TextUppercase from '../atoms/TextUppercase';

interface Props {
  title: string;
}

const WineListDetails: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div className="flex flex-col w-full justify-between lg:px-0 sm:px-2 whitespace-no-wrap">
      <TextUppercase>{title}</TextUppercase>
      {children}
    </div>
  );
};

export default WineListDetails;
