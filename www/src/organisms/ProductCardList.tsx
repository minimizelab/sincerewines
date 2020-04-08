import React, { FunctionComponent } from 'react';
import WineCard from '../molecules/WineCard';
import WineCaseCard from '../molecules/WineCaseCard';
import { Wine, WineCase, WineData } from '../types/types';

interface Props {
  privateCustomer?: boolean;
  data: WineData[];
}

const ProductCardList: FunctionComponent<Props> = ({
  privateCustomer,
  data,
}) => {
  const privateCustomerTypes = [
    'Privatimport',
    'Ev. privatimport',
    'Beställningssortiment',
    'Fast sortiment',
    'Tillfälligt sortiment',
  ];

  return (
    <div className="flex flex-row flex-wrap w-full justify-start self-center">
      {data &&
        data.map((edge) => {
          if (privateCustomer) {
            return privateCustomerTypes.includes(edge.node.assortment) ? (
              edge.node._type === 'wine' ? (
                <WineCard key={edge.node.id} item={edge.node as Wine} />
              ) : (
                <WineCaseCard key={edge.node.id} item={edge.node as WineCase} />
              )
            ) : null;
          } else {
            return <WineCard key={edge.node.id} item={edge.node as Wine} />;
          }
        })}
    </div>
  );
};
export default ProductCardList;
