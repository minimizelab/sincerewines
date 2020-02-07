import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ProductCard from '../molecules/ProductCard';
import { Wine } from '../types/types';

interface Props {
  short?: boolean;
  systembolaget?: boolean;
}

const ProductCardList: FunctionComponent<Props> = ({
  short,
  systembolaget,
}) => {
  const data: {
    allSanityWine: { edges: Array<{ node: Wine }> };
  } = useStaticQuery(graphql`
    query ProductItemsQuery {
      allSanityWine {
        edges {
          node {
            ...Wine
            image {
              asset {
                fixed(height: 140) {
                  ...GatsbySanityImageFixed
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <div className="flex flex-row flex-wrap w-full justify-start self-center">
      {data.allSanityWine.edges.map((edge, index) => {
        if (short)
          return index < 4 ? (
            <ProductCard key={index} item={edge.node} />
          ) : null;
        if (systembolaget) {
          return edge.node.link ? (
            <ProductCard key={index} item={edge.node} />
          ) : null;
        } else {
          return !edge.node.link ? (
            <ProductCard key={index} item={edge.node} />
          ) : null;
        }
      })}
    </div>
  );
};
export default ProductCardList;
