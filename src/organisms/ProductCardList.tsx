import React, { FunctionComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ProductCard from '../molecules/ProductCard';

interface Props {
  short?: boolean;
}

const ProductCardList: FunctionComponent<Props> = ({ short }) => (
  <div className="flex flex-row flex-wrap w-full justify-start self-center">
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
                image {
                  childImageSharp {
                    fixed(height: 140) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
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
          return <ProductCard key={index} item={edge.node} />;
        })
      }
    />
  </div>
);

export default ProductCardList;
