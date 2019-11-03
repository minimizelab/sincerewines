import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ProductCard from '../molecules/ProductCard';

interface Props {
  short?: boolean;
}

const ProductCardList: FunctionComponent<Props> = ({ short }) => {
  const data = useStaticQuery(graphql`
    query ProductItemsQuery {
      allWinesJson {
        edges {
          node {
            name
            producer
            year
            grape
            district
            type
            price
            food
            slug
            alcohol
            image {
              childImageSharp {
                fixed(height: 140) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            description
            reward
          }
        }
      }
    }
  `);
  return (
    <div className="flex flex-row flex-wrap w-full justify-start self-center">
      {data.allWinesJson.edges.map((edge: any, index: number) => {
        if (short)
          return index < 4 ? (
            <ProductCard key={index} item={edge.node} />
          ) : null;
        return <ProductCard key={index} item={edge.node} />;
      })}
    </div>
  );
};
export default ProductCardList;