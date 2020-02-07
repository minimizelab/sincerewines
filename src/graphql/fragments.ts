import { graphql } from 'gatsby';

export const wineFragment = graphql`
  fragment Wine on SanityWine {
    alc
    articleNumber
    id
    link
    name
    packageRequirement
    price
    type
    vol
    year
    grapes {
      name
    }
    path {
      current
    }
    producer {
      name
    }
  }
`;
