import React, { FunctionComponent, useState, useMemo } from 'react';
import { State } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/list';
import { AppDispatch } from '../store';

import { Wine, Grape, Producer } from '../types/types';
import H5 from '../atoms/H5';
import Text from '../atoms/Text';
import { Image, useSanityImage } from '@minimizelab/mini_ui-react';
import TypeIndicator from '../atoms/TypeIndicator';
import { createArrayString } from '../utils/functions';
import QuantityButton from '../atoms/QuantityButton';
import ListIndicator from '../atoms/ListIndicator';
import WineListDetails from './WineListDetails';
import ArrowLink from '../atoms/ArrowLink';

interface Props {
  item: Wine;
}

const WineListCard: FunctionComponent<Props> = ({ item }) => {
  const [caseQuantity, setCaseQuantity] = useState(0);
  const [caseVol, setCaseVol] = useState(0);
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
  const isItemWine = useMemo(() => {
    if (item._type === 'wine') {
      return true;
    } else {
      setCaseQuantity(
        item.caseWines.reduce((acc, item) => acc + item.quantity, 0)
      );
      setCaseVol(item.caseWines[0].wine.vol);
      return false;
    }
  }, [item]);

  return (
    <div className="w-full relative sm:w-2/3">
      {console.log(item)}
      <div className="bg-white h-270 lg:h-208 rounded shadow mx-6 my-3 md:my-6 p-6 flex flex-row">
        {isItemWine ? (
          <div className="flex flex-col w-16 justify-center items-center">
            <Image
              {...imageProps}
              aspectRatio={item.image.asset.metadata.dimensions.aspectRatio}
            />
          </div>
        ) : null}

        <div className="flex flex-row flex-wrap w-full pr-6 sm:pr-10 md:pr-14">
          <div className="flex flex-col p-2 items-start lg:flex-grow justify-around">
            {isItemWine ? (
              <Text>{item.producer.name}</Text>
            ) : (
              createArrayString(
                item.caseWines
                  .map((item: any) => item.wine.producer)
                  .reduce((unique: Array<string>, item: Producer) => {
                    return unique.includes(item.name)
                      ? unique
                      : [...unique, item.name];
                  }, [])
              )
            )}
            <H5>{item.name}</H5>
            {isItemWine ? (
              <H5>{item.year}</H5>
            ) : (
              <H5>{caseQuantity + ' x ' + caseVol + ' cl'}</H5>
            )}

            {isItemWine ? (
              <Text>
                {createArrayString(item.grapes.map((item) => item.name))}
              </Text>
            ) : (
              createArrayString(
                item.caseWines
                  .map((item: any) => item.wine.grapes)
                  .reduce((prev: any, current: any) => prev.concat(current))
                  .reduce((unique: Array<string>, item: Grape) => {
                    return unique.includes(item.name)
                      ? unique
                      : [...unique, item.name];
                  }, [])
              )
            )}
          </div>
          <div className="flex flex-col justify-between lg:w-5/12 xl:w-1/3 w-full">
            <div className="flex flex-row w-full select-none p-2">
              <WineListDetails title="Antal">
                <div className="flex flex-row">
                  <p className="pr-4">{itemQuantity()}</p>
                  <QuantityButton
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                  />
                </div>
              </WineListDetails>
              <WineListDetails title="Volym">
                {isItemWine ? (
                  <p>{item.vol * itemQuantity() + ' cl'}</p>
                ) : (
                  <p>{caseQuantity * caseVol * itemQuantity() + ' cl'}</p>
                )}
              </WineListDetails>
              <WineListDetails title="Pris">
                <p>{item.price * itemQuantity() + ' kr'}</p>
              </WineListDetails>

              <WineListDetails title="Artikel#">
                {item.articleNumber ? <p>{item.articleNumber}</p> : <p>-</p>}
              </WineListDetails>
            </div>
            <div className="self-end print:invisible">
              <ArrowLink to={`/sortiment/${item.path.current}`}>
                Läs mer om vinet
              </ArrowLink>
            </div>
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
