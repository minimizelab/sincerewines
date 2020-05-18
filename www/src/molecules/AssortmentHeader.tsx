import React, { FunctionComponent } from 'react';
import H4 from '../atoms/H4';

interface Props {
  privateCustomer: boolean;
}

const AssortmentHeader: FunctionComponent<Props> = ({
  privateCustomer,
  children,
}) => (
  <div className="flex flex-row justify-between flex-wrap mx-6">
    {privateCustomer ? (
      <H4>Sortiment för privata kunder</H4>
    ) : (
      <H4>Sortiment för restauranger</H4>
    )}

    {children}
  </div>
);

export default AssortmentHeader;
