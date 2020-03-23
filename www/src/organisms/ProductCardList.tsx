import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ProductCard from '../molecules/ProductCard';
import { Wine } from '../types/types';

interface Props {
  short?: boolean;
  privateCustomer?: boolean;
}

const ProductCardList: FunctionComponent<Props> = ({
  short,
  privateCustomer,
}) => {
  const privateCustomerTypes = [
    'Privatimport',
    'Ev. privatimport',
    'Beställningssortiment',
  ];
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
                url
                metadata {
                  dimensions {
                    aspectRatio
                  }
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
            <ProductCard key={edge.node.id} item={edge.node} />
          ) : null;
        if (privateCustomer) {
          return privateCustomerTypes.includes(edge.node.assortment) ? (
            <ProductCard key={edge.node.id} item={edge.node} />
          ) : null;
        } else {
          return <ProductCard key={edge.node.id} item={edge.node} />;
        }
      })}
    </div>
  );
};
export default ProductCardList;
