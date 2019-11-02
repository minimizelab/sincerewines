import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  data: any;
}

const Wine: FunctionComponent<Props> = ({ data: { winesJson: wine } }) => (
  <div>
    {wine.name}
    <Img fluid={wine.image.childImageSharp.fluid}></Img>
  </div>
);

export default Wine;

export const pageQuery = graphql`
  query WinePage($slug: String!) {
    winesJson(slug: { eq: $slug }) {
      alcohol
      image {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      description
      food
      grape
      name
      price
      producer
      region
      type
      volume
      year
    }
  }
`;
