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
        data.map((wine) => {
          if (privateCustomer && !wineList) {
            return privateCustomerTypes.includes(wine.assortment) ? (
              wine._type === 'wine' ? (
                <WineCard key={wine._id} item={wine as Wine} />
              ) : (
                <WineCaseCard key={wine._id} item={wine as WineCase} />
              )
            ) : null;
          } else if (wineList) {
            return (
              <WineListCard
                privateCustomer={privateCustomer}
                key={wine._id}
                item={wine as Wine}
              />
            );
          } else {
            return <WineCard key={wine._id} item={wine as Wine} />;
          }
        })}
    </div>
  );
};
export default ProductCardList;
