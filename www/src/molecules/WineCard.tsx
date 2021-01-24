import React, { FunctionComponent } from 'react';
import { State } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/list';
import { AppDispatch } from '../store';

import { Wine } from '../types/types';
import H5 from '../atoms/H5';
import Text from '../atoms/Text';
import Image from 'next/image';
import TypeIndicator from '../atoms/TypeIndicator';
import ListIndicator from '../atoms/ListIndicator';
import { createArrayString } from '../utils/functions';
import { useRouter } from 'next/router';

interface Props {
  item: Wine;
}

const WineCard: FunctionComponent<Props> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const wineList = useSelector<State, Array<{ id: string; quantity: number }>>(
    (state) => state.list.wineList
  );

  const addToWineList = (): void => {
    dispatch(actions.addWine(item._id));
  };

  const deleteFromWineList = (): void => {
    dispatch(actions.deleteWine(item._id));
  };

  const isInWineList = (id: string): boolean => {
    return Object.values(wineList)
      .map((item) => item.id)
      .includes(id);
  };

  const handleOnClick = (event: any): void => {
    event.preventDefault();
    router.push(`/sortiment/${item.path}`);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 relative">
      <div
        onClick={handleOnClick}
        className="bg-white h-208 rounded shadow mx-6 my-3 md:my-6 p-6 flex flex-row cursor-pointer"
      >
        <div className="flex flex-row">
          <div className="flex flex-col w-16 justify-center items-center relative">
            <Image
              src={item.image.url}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="flex flex-row flex-grow">
            <div className="flex flex-col p-2 pr-4 items-start flex-grow justify-around">
              <Text>{item.producer.name}</Text>
              <H5>{item.name}</H5>
              <H5>{item.year}</H5>
              <Text>
                {createArrayString(item.grapes.map((item) => item.name))}
              </Text>
            </div>
          </div>
        </div>

        <ListIndicator
          className="absolute m-10 top-0 right-0"
          inList={isInWineList(item._id)}
          deleteFromList={deleteFromWineList}
          addToList={addToWineList}
        />
        <TypeIndicator
          className="absolute m-10 bottom-0 right-0"
          type={item.type}
        />
      </div>
    </div>
  );
};

export default WineCard;
