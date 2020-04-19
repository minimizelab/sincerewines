import React, { FunctionComponent } from 'react';
import { State } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/list';
import { AppDispatch } from '../store';

import { Wine } from '../types/types';
import H5 from '../atoms/H5';
import Text from '../atoms/Text';
import { Image, useSanityImage } from '@minimizelab/mini_ui-react';
import { navigate } from 'gatsby';
import TypeIndicator from '../atoms/TypeIndicator';
import { createArrayString } from '../utils/functions';

interface Props {
  item: Wine;
}

const WineCard: FunctionComponent<Props> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const wineList = useSelector<State, { id: string; quantity: number }[]>(
    (state) => state.list.wineList
  );
  const imageProps = useSanityImage({
    baseUrl: item.image.asset.url,
    size: { height: 140 },
  });

  const addToWineList = (): void => {
    console.log('added to wine list');
    dispatch(actions.addWine(item.id));
  };

  const deleteFromWineList = (): void => {
    console.log('deleted from wine list');
    dispatch(actions.deleteWine(item.id));
  };

  const isInWineList = (id: string): boolean => {
    return Object.values(wineList)
      .map((item) => item.id)
      .includes(id);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div
        onClick={(): void => {
          navigate(`/sortiment/${item.path.current}`);
        }}
        className="bg-white h-208 rounded shadow mx-6 my-3 md:my-6 p-6 flex flex-row cursor-pointer"
      >
        <div className="flex flex-col w-16 justify-center items-center">
          <Image
            {...imageProps}
            aspectRatio={item.image.asset.metadata.dimensions.aspectRatio}
          />
        </div>
        <div className="flex flex-row flex-grow">
          <div className="flex flex-col p-2 items-start flex-grow justify-around">
            <Text>{item.producer.name}</Text>
            <H5>{item.name}</H5>
            <H5>{item.year}</H5>
            <Text>
              {createArrayString(item.grapes.map((item) => item.name))}
            </Text>
          </div>
          <div className="flex flex-col justify-end align-end p-2">
            <button
              onClick={
                isInWineList(item.id) ? deleteFromWineList : addToWineList
              }
            >
              {isInWineList(item.id) ? 'Delete from list' : 'Add to list'}
            </button>
            <TypeIndicator className="self-end" type={item.type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineCard;
