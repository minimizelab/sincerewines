import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
}

const WineListDetails: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div className="px-4">
      <p>{title}</p>
      {children}
    </div>
  );
};

export default WineListDetails;
