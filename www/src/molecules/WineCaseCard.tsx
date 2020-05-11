import React, { FunctionComponent } from 'react';
import { WineCase, Wine, Producer, Grape } from '../types/types';
import { State } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/list';
import { AppDispatch } from '../store';
import H5 from '../atoms/H5';
import Text from '../atoms/Text';
import { Image, useSanityImage } from '@minimizelab/mini_ui-react';
import { navigate } from 'gatsby';
import TypeIndicator from '../atoms/TypeIndicator';
import { createArrayString } from '../utils/functions';
import ListIndicator from '../atoms/ListIndicator';

interface Props {
  item: WineCase;
}

const WineCaseCard: FunctionComponent<Props> = ({ item }) => {
  /* const imageProps = useSanityImage({
    baseUrl: item.image.asset.url,
    size: { height: 140 },
  }); */
  const dispatch = useDispatch<AppDispatch>();
  const wineList = useSelector<State, { id: string; quantity: number }[]>(
    (state) => state.list.wineList
  );

  const addToWineList = (): void => {
    dispatch(actions.addWine(item.id));
  };

  const deleteFromWineList = (): void => {
    dispatch(actions.deleteWine(item.id));
  };

  const isInWineList = (id: string): boolean => {
    return Object.values(wineList)
      .map((item) => item.id)
      .includes(id);
  };

  const handleOnClick = (event: any) => {
    event.preventDefault();
    navigate(`/sortiment/${item.path.current}`);
  };

  const { caseWines } = item;
  const wineQuantity = caseWines.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 relative">
      <div
        onClick={handleOnClick}
        className="bg-white h-208 rounded shadow mx-6 my-3 md:my-6 p-6 flex flex-row cursor-pointer"
      >
        {/* {item.image && (
          <div className="flex flex-col w-16 justify-center items-center">
            <Image
              {...imageProps}
              aspectRatio={item.image.asset.metadata.dimensions.aspectRatio}
            />
          </div>
        )} */}
        <div className="flex flex-col p-2 items-start flex-grow justify-around">
          {/* <Text>{item.producer.name}</Text> */}
          <Text>
            {createArrayString(
              caseWines
                .map((item) => item.wine.producer)
                .reduce((unique: Array<string>, item: Producer) => {
                  return unique.includes(item.name)
                    ? unique
                    : [...unique, item.name];
                }, [])
            )}
          </Text>
          <H5>{item.name}</H5>
          <H5>{wineQuantity + ' x ' + caseWines[0].wine.vol + ' cl'}</H5>
          <Text>
            {createArrayString(
              caseWines
                .map((item) => item.wine.grapes)
                .reduce((prev, current) => prev.concat(current))
                .reduce((unique: Array<string>, item: Grape) => {
                  return unique.includes(item.name)
                    ? unique
                    : [...unique, item.name];
                }, [])
            )}
            {/* createGrapeString(caseWines.map(item => item.wine.grapes))
            caseWines.map((item, i, arr) => {
              if (arr.length - 1 === i) {
                return createGrapeString(item.wine.grapes);
              } else {
                return createGrapeString(item.wine.grapes) + ', ';
              }
            }) */}
          </Text>

          {/* <TypeIndicator className="self-end" type={item.type} /> */}
        </div>
        <ListIndicator
          className="absolute m-10 top-0 right-0"
          inList={isInWineList(item.id)}
          deleteFromList={deleteFromWineList}
          addToList={addToWineList}
        />
      </div>
    </div>
  );
};

export default WineCaseCard;
