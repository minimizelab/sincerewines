import React, { FunctionComponent } from 'react';
import ProductCard from '../molecules/ProductCard';
import { Wine, WineCase } from '../types/types';

interface Props {
  short?: boolean;
  privateCustomer?: boolean;
  data: { node: Wine | WineCase }[];
}

const ProductCardList: FunctionComponent<Props> = ({
  short,
  privateCustomer,
  data,
}) => {
  const privateCustomerTypes = [
    'Privatimport',
    'Ev. privatimport',
    'Beställningssortiment',
  ];
  return (
    <div className="flex flex-row flex-wrap w-full justify-start self-center">
      {data &&
        data.map((edge, index) => {
          /*         if (short)
          return index < 4 ? (
            <ProductCard key={edge.node.id} item={edge.node} />
          ) : null; */
          if (privateCustomer) {
            return privateCustomerTypes.includes(edge.node.assortment) ? (
              edge.node._type === 'wine' ? (
                <ProductCard key={edge.node.id} item={edge.node as Wine} />
              ) : null
            ) : null;
          } else {
            return <ProductCard key={edge.node.id} item={edge.node as Wine} />;
          }
        })}
    </div>
  );
};
export default ProductCardList;
