import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../store';
import Content from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import TypeIndicator from '../atoms/TypeIndicator';
import Text from '../atoms/Text';
import WineRow from '../molecules/WineRow';
import ArrowLink from '../atoms/ArrowLink';
import { WineCase } from '../types/types';
import { wineType, createGrapeString } from '../utils/functions';
import { wineSerializers } from '../utils/serializers';

interface Props {
  data: {
    sanityWineCase: WineCase;
  };
}

const WineCaseTemplate: FunctionComponent<Props> = ({
  data: { sanityWineCase: wineCase },
}) => {
  const privateCustomer = useSelector<State, boolean>(
    state => state.ui.privateCustomer
  );
  const wine = wineCase.wines[0];
  return (
    <Layout title={wineCase.name}>
      <Section className="justify-center">
        <div className="m-4 sm:m-8 flex flex-row flex-wrap w-full lg:w-2/3 bg-white rounded shadow p-10">
          <div className="flex flex-col w-full lg:w-1/3 sm:pr-4 mb-4 lg:mb-0">
            <div className="w-full h-400 lg:h-500">
              <Img
                imgStyle={{
                  objectFit: 'contain',
                }}
                className="h-full w-full"
                fluid={wineCase.image && wineCase.image.asset.fluid}
              ></Img>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-2/3">
            <div className="flex flex-wrap flex-row items-between">
              <div className="w-full sm:w-2/3">
                <H1>{wineCase.name}</H1>
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
                  <WineRow
                    title="Druva"
                    value={createGrapeString(wine.grapes)}
                  ></WineRow>
                  <WineRow
                    title="Distrikt"
                    value={
                      wine.district &&
                      `${wine.district.name}, ${wine.district.country}`
                    }
                  ></WineRow>
                  <WineRow
                    title="Producent"
                    value={wine.producer.name}
                  ></WineRow>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-1/2">
                <div className="lg:ml-6">
                  <WineRow
                    title="Alkoholhalt"
                    value={`${wine.alc} %`}
                  ></WineRow>
                  {privateCustomer ? (
                    <WineRow
                      title={`Pris ${
                        privateCustomer ? 'privat' : 'restaurang'
                      }`}
                      value={`${
                        wineCase.price !== null
                          ? wineCase.price + ' kr '
                          : 'Kontakta oss!'
                      }`}
                    ></WineRow>
                  ) : (
                    <WineRow
                      title={`Pris ${
                        privateCustomer ? 'privat' : 'restaurang'
                      }`}
                      value="Separat prislista"
                    ></WineRow>
                  )}
                  {wine.assortment === 'Beställningssortiment' ? (
                    <WineRow
                      title="Artikel #"
                      value={wine.articleNumber}
                    ></WineRow>
                  ) : (
                    <WineRow
                      title="Sortiment"
                      value={wineCase.assortment}
                    ></WineRow>
                  )}
                </div>
              </div>
              <div className="flex flex-col"></div>
            </div>
            <hr className="my-4"></hr>
            <Content blocks={wine._rawDesc} serializers={wineSerializers} />
            {wine.link && (
              <ArrowLink to={wine.link}>
                {wineCase.assortment === 'Beställningssortiment'
                  ? 'VINET HOS SYSTEMBOLAGET'
                  : 'BESTÄLL FRÅN SYSTEMBOLAGET'}
              </ArrowLink>
            )}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default WineCaseTemplate;

export const pageQuery = graphql`
  query WineCasePage($slug: String!) {
    sanityWineCase(path: { current: { eq: $slug } }) {
      ...WineCase
      image {
        asset {
          fluid(maxHeight: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
