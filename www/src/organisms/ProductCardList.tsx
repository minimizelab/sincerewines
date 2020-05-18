import React, { FunctionComponent } from 'react';
import WineCard from '../molecules/WineCard';
import WineCaseCard from '../molecules/WineCaseCard';
import { Wine, WineCase, WineData } from '../types/types';
import WineListCard from '../molecules/WineListCard';
import { combineClasses } from '@minimizelab/mini_utils';

interface Props {
  privateCustomer?: boolean;
  data: WineData[];
  wineList?: boolean;
}

const ProductCardList: FunctionComponent<Props> = ({
  privateCustomer,
  wineList,
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
    <div
      className={combineClasses([
        'flex flex-row flex-wrap w-full self-center',
        wineList ? 'justify-center' : 'justify-start',
      ])}
    >
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
          } else if (wineList) {
            return <WineListCard key={edge.node.id} item={edge.node as Wine} />;
          } else {
            return <WineCard key={edge.node.id} item={edge.node as Wine} />;
          }
        })}
    </div>
  );
};
export default ProductCardList;
