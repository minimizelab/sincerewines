import React, { FunctionComponent } from 'react';

const WineRow: FunctionComponent = ({ children }) => (
  <div className="flex flex-row justify-between my-2">{children}</div>
);

export default WineRow;
