import React, { FunctionComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ProductCard from '../molecules/ProductCard';

interface Props {
  short?: boolean;
}

const ProductCardList: FunctionComponent<Props> = ({ short }) => (
  <div className="flex flex-wrap justify-between w-full">
    <StaticQuery
      query={graphql`
        query ProductItemsQuery {
          allWinesJson {
            edges {
              node {
                name
                producer
                year
                grape
                region
                type
                price
                food
                alcohol
                image
                description
              }
            }
          }
        }
      `}
      render={json =>
        json.allWinesJson.edges.map((edge: any, index: number) => {
          if (short)
            return index < 4 ? (
              <ProductCard key={index} item={edge.node} />
            ) : null;
          else <ProductCard key={index} item={edge.node} />;
        })
      }
    />
  </div>
);

export default ProductCardList;
