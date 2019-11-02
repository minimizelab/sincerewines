import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import H3 from '../atoms/H3';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import TypeIndicator from '../atoms/TypeIndicator';
import Text from '../atoms/Text';

interface Props {
  data: any;
}

const wineType = (type: string) => {
  if (type === 'red') return 'RÖDA VINER';
  if (type === 'white') return 'VITA VINER';
  if (type === 'rose') return 'ROSÈVINER';
};

const Wine: FunctionComponent<Props> = ({ data: { winesJson: wine } }) => (
  <Layout title={wine.name}>
    <Section className="justify-center">
      <div className="m-10 flex flex-row flex-wrap w-2/3 bg-white p-10">
        <div className="flex flex-col w-48 sm:w-1/3 justify-center items-center">
          <Img
            className="w-full"
            fluid={wine.image.childImageSharp.fluid}
          ></Img>
        </div>

        <div className="flex flex-col w-2/3">
          <div className="flex flex-wrap flex-row items-between">
            <div className="w-2/3">
              <H1>{wine.name}</H1>
              <H3>{wine.year}</H3>
            </div>

            <div className="w-1/3 flex flex-row">
              <TypeIndicator type={wine.type} />
              <Text className="pl-2">{wineType(wine.type)}</Text>
            </div>
          </div>
          <hr></hr>
          <div className="flex flex-row">
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <Text>DRUVA</Text>
                <Text>{wine.grape}</Text>
              </div>
              <div className="flex flex-row justify-between">
                <Text>DISTRIKT</Text>
                <Text>{wine.district}</Text>
              </div>
              <div className="flex flex-row justify-between">
                <Text>PRODUCENT</Text>
                <Text>{wine.producer}</Text>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <Text>ALKOHOLHALT</Text>
                <Text>{wine.alcohol}</Text>
              </div>
              <div className="flex flex-row justify-between">
                <Text>PRIS</Text>
                <Text>
                  {wine.price} (
                  {wine.kollikrav ? 'Kollikrav' : 'Inget kollikrav'})
                </Text>
              </div>
              <div className="flex flex-row justify-between">
                <Text>VOLYM</Text>
                <Text>{wine.volume} cl</Text>
              </div>
            </div>
            <div className="flex flex-col"></div>
          </div>

          <div>Info</div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default Wine;

export const pageQuery = graphql`
  query WinePage($slug: String!) {
    winesJson(slug: { eq: $slug }) {
      alcohol
      image {
        childImageSharp {
          fluid(maxWidth: 1000) {
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
      district
      type
      volume
      year
    }
  }
`;
