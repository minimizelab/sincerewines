import React, { FunctionComponent } from 'react';
import { Wine } from '../types/types';
import H5 from '../atoms/H5';
import Text from '../atoms/Text';
import Img from 'gatsby-image';
import { navigate } from 'gatsby';
import TypeIndicator from '../atoms/TypeIndicator';

interface Props {
  item: Wine;
}

const ProductCard: FunctionComponent<Props> = ({ item }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 min-w-card">
    <div
      onClick={() => navigate(item.slug)}
      className="bg-white rounded shadow m-6 p-6 flex flex-row cursor-pointer"
    >
      <div className="flex flex-col w-16 justify-center items-center">
        <Img fixed={item.image.childImageSharp.fixed} />
      </div>
      <div className="flex flex-col items-start flex-grow justify-center">
        <Text>{item.producer}</Text>
        <H5>{item.name}</H5>
        <H5>{item.year}</H5>
        <Text>{item.grape}</Text>
        <TypeIndicator className="self-end" type={item.type} />
      </div>
    </div>
  </div>
);

export default ProductCard;
