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

export const producerFragment = graphql`
  fragment Producer on SanityProducer {
    id
    name
    intro
    path {
      current
    }
    grapes {
      name
    }
    _rawDesc
    makers {
      id
      name
      image {
        asset {
          fluid(maxWidth: 640, maxHeight: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
