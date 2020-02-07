import React, { FunctionComponent } from 'react';
import { Wine } from '../types/types';
import H5 from '../atoms/H5';
import Text from '../atoms/Text';
import Img from 'gatsby-image';
import { navigate } from 'gatsby';
import TypeIndicator from '../atoms/TypeIndicator';
import { createGrapeString } from '../utils/functions';

interface Props {
  item: Wine;
}

const ProductCard: FunctionComponent<Props> = ({ item }) => (
  <div className="w-full md:w-1/2 lg:w-1/4">
    <div
      onClick={(): void => {
        navigate(`/sortiment/${item.path.current}`);
      }}
      className="bg-white rounded shadow mx-6 my-3 md:my-6 p-6 flex flex-row cursor-pointer"
    >
      <div className="flex flex-col w-16 justify-center items-center">
        <Img fixed={item.image.asset.fixed} />
      </div>
      <div className="flex flex-col items-start flex-grow justify-center">
        <Text>{item.producer.name}</Text>
        <H5>{item.name}</H5>
        <H5>{item.year}</H5>
        <Text>{createGrapeString(item.grapes)}</Text>
        <TypeIndicator className="self-end" type={item.type} />
      </div>
    </div>
  </div>
);

export default ProductCard;
