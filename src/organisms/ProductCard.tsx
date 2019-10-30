import React, { FunctionComponent } from 'react';
import { Wine } from '../types/types';

interface Props {
  item: Wine;
}

const ProductCard: FunctionComponent<Props> = ({ item }) => (
  <div>{item.name}</div>
);

export default ProductCard;
