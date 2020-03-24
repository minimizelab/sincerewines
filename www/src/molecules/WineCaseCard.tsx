import React, { FunctionComponent } from 'react';
import { WineCase, Wine, Producer, Grape } from '../types/types';
import H5 from '../atoms/H5';
import Text from '../atoms/Text';
import { Image, useSanityImage } from '@minimizelab/mini_ui-react';
import { navigate } from 'gatsby';
import TypeIndicator from '../atoms/TypeIndicator';
import { createArrayString } from '../utils/functions';

interface Props {
  item: WineCase;
}

const WineCaseCard: FunctionComponent<Props> = ({ item }) => {
  /* const imageProps = useSanityImage({
    baseUrl: item.image.asset.url,
    size: { height: 140 },
  }); */
  const { caseWines } = item;
  const wineQuantity = caseWines.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="w-full md:w-1/2 lg:w-1/4">
      <div
        onClick={(): void => {
          navigate(`/sortiment/${item.path.current}`);
        }}
        className="bg-white rounded shadow mx-6 my-3 md:my-6 p-6 flex flex-row cursor-pointer"
      >
        {/* {item.image && (
          <div className="flex flex-col w-16 justify-center items-center">
            <Image
              {...imageProps}
              aspectRatio={item.image.asset.metadata.dimensions.aspectRatio}
            />
          </div>
        )} */}
        <div className="flex flex-col h-140 items-start flex-grow justify-center">
          {/* <Text>{item.producer.name}</Text> */}
          <Text>
            {createArrayString(
              caseWines
                .map(item => item.wine.producer)
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
                .map(item => item.wine.grapes)
                .flat(1)
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
      </div>
    </div>
  );
};

export default WineCaseCard;
