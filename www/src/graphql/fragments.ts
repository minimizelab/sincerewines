import { graphql } from 'gatsby';

export const wineFragment = graphql`
  fragment Wine on SanityWine {
    alc
    articleNumber
    id
    link
    name
    _rawDesc
    packageRequirement
    price
    _type
    vol
    year
    type
    assortment
    district {
      name
      country
    }
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

export const wineCaseFragment = graphql`
  fragment WineCase on SanityWineCase {
    id
    link
    name
    _type
    _rawDesc
    price
    assortment
    articleNumber
    caseWines {
      quantity
      wine {
        ...Wine
      }
    }
    path {
      current
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
