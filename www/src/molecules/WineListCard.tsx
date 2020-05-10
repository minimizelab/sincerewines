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
import QuantityButton from '../atoms/QuantityButton';
import ListIndicator from '../atoms/ListIndicator';
import WineListDetails from './WineListDetails';

interface Props {
  item: Wine;
}

const WineListCard: FunctionComponent<Props> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const wineList = useSelector<State, { id: string; quantity: number }[]>(
    (state) => state.list.wineList
  );
  const imageProps = useSanityImage({
    baseUrl: item.image.asset.url,
    size: { height: 140 },
  });

  const itemQuantity = (): number =>
    wineList.filter((wine) => wine.id === item.id)[0].quantity;

  const deleteFromWineList = (): void => {
    dispatch(actions.deleteWine(item.id));
  };

  const increaseQuantity = (): void => {
    dispatch(actions.increaseQuantity(item.id));
  };

  const decreaseQuantity = (): void => {
    dispatch(actions.decreaseQuantity(item.id));
  };

  const handleOnClick = (event: any): void => {
    event.preventDefault();
    navigate(`/sortiment/${item.path.current}`);
  };

  return (
    <div className="w-full relative sm:w-2/3">
      <div
        onClick={handleOnClick}
        className="bg-white h-208 rounded shadow mx-6 my-3 md:my-6 p-6 flex flex-row cursor-pointer"
      >
        <div className="flex flex-col w-16 justify-center items-center">
          <Image
            {...imageProps}
            aspectRatio={item.image.asset.metadata.dimensions.aspectRatio}
          />
        </div>
        <div className="flex flex-row lg:flex-grow flex-wrap sm:pr-16">
          <div className="flex flex-col p-2 items-start flex-grow justify-around">
            <Text>{item.producer.name}</Text>
            <H5>{item.name}</H5>
            <H5>{item.year}</H5>
            <Text>
              {createArrayString(item.grapes.map((item) => item.name))}
            </Text>
          </div>
          <div className="flex flex-row lg:w-1/3 md:w-3/4 sm:w-full select-none">
            <WineListDetails title="Antal">
              <div className="flex flex-row justify-between">
                <p>{itemQuantity()}</p>
                <QuantityButton
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                />
              </div>
            </WineListDetails>
            <WineListDetails title="Volym">
              <p>{item.vol * itemQuantity() + ' cl'}</p>
            </WineListDetails>
            <WineListDetails title="Pris">
              <p className="whitespace-no-wrap">
                {item.price * itemQuantity() + ' kr'}
              </p>
            </WineListDetails>
          </div>
          <ListIndicator
            className="absolute m-10 top-0 right-0"
            inList={true}
            deleteFromList={deleteFromWineList}
          />
          <TypeIndicator
            className="absolute m-10 bottom-0 right-0"
            type={item.type}
          />
        </div>
      </div>
    </div>
  );
};

export default WineListCard;
