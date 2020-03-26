import React, { FunctionComponent } from 'react';
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
  const imageProps = useSanityImage({
    baseUrl: item.image.asset.url,
    size: { height: 140 },
  });
  return (
    <div className="w-full md:w-1/2 lg:w-1/4">
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
            <Text>{createArrayString(item.grapes.map(item => item.name))}</Text>
          </div>
          <div className="flex justify-end align-end p-2">
            <TypeIndicator className="self-end" type={item.type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineCard;
