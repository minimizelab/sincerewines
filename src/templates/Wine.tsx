import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import H3 from '../atoms/H3';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import TypeIndicator from '../atoms/TypeIndicator';
import Text from '../atoms/Text';
import WineRow from '../molecules/WineRow';

interface Props {
  data: any;
}

const wineType = (type: string) => {
  if (type === 'red') return 'RÖDA VINER';
  if (type === 'white') return 'VITA VINER';
  if (type === 'rose') return 'ROSÉVINER';
};

const Wine: FunctionComponent<Props> = ({ data: { winesJson: wine } }) => (
  <Layout title={wine.name}>
    <Section className="justify-center">
      <div className="m-4 sm:m-8 flex flex-row flex-wrap w-full lg:w-2/3 bg-white rounded shadow p-10">
        <div className="flex flex-col w-full lg:w-1/3 sm:pr-4 mb-4 lg:mb-0">
          <div className="w-full h-400 lg:h-500">
            <Img
              imgStyle={{
                objectFit: 'contain',
              }}
              className="h-full w-full"
              fluid={wine.image.childImageSharp.fluid}
            ></Img>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-2/3">
          <div className="flex flex-wrap flex-row items-between">
            <div className="w-full sm:w-2/3">
              <H1>{wine.name}</H1>
              <H3>{wine.year}</H3>
            </div>

            <div className="w-full sm:w-1/3 flex flex-row justify-end mt-3">
              <TypeIndicator type={wine.type} />
              <Text className="pl-2">{wineType(wine.type)}</Text>
            </div>
          </div>
          <hr className="my-4"></hr>
          <div className="flex flex-wrap flex-row">
            <div className="flex flex-col w-full lg:w-1/2">
              <div className="lg:mr-6">
                <WineRow title="Druva" value={wine.grape}></WineRow>
                <WineRow title="Distrikt" value={wine.district}></WineRow>
                <WineRow title="Producent" value={wine.producer}></WineRow>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <div className="lg:ml-6">
                <WineRow
                  title="Alkoholhalt"
                  value={`${wine.alcohol} %`}
                ></WineRow>
                {wine.price === 0 ? (
                  <WineRow title="Pris" value="Kontakta oss"></WineRow>
                ) : (
                  <WineRow
                    title="Pris"
                    value={`${wine.price} kr (
                  ${wine.kollikrav ? 'Kollikrav' : 'Inget kollikrav'})`}
                  ></WineRow>
                )}
                {wine.systembolaget === true && (
                  <WineRow title="Artikel #" value={wine.articleNr}></WineRow>
                )}
              </div>
            </div>
            <div className="flex flex-col"></div>
          </div>
          <hr className="my-4"></hr>
          <Text className="py-2">{wine.description}</Text>
          <Text className="py-2">{wine.reward}</Text>
          <Text className="py-2">{wine.food}</Text>
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
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      description
      reward
      food
      kollikrav
      grape
      systembolaget
      name
      price
      producer
      district
      type
      volume
      year
      articleNr
    }
  }
`;
