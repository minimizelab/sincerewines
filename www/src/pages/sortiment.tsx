import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../store';
import { graphql, useStaticQuery } from 'gatsby';
import { Wine, WineCase } from '../types/types';
import Layout from '../organisms/Layout';
import ProductCardList from '../organisms/ProductCardList';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import H4 from '../atoms/H4';
import TabButtons from '../organisms/TabButtons';

const Sortiment: FunctionComponent = () => {
  const privateCustomer = useSelector<State, boolean>(
    state => state.ui.privateCustomer
  );

  const {
    allSanityWine,
    allSanityWineCase,
  }: {
    allSanityWine: { edges: Array<{ node: Wine | WineCase }> };
    allSanityWineCase: { edges: Array<{ node: WineCase | Wine }> };
  } = useStaticQuery(graphql`
    query ProductItemsQuery {
      allSanityWine {
        edges {
          node {
            ...Wine
            image {
              asset {
                fixed(height: 140) {
                  ...GatsbySanityImageFixed
                }
              }
            }
          }
        }
      }
      allSanityWineCase {
        edges {
          node {
            ...WineCase
            image {
              asset {
                fixed(height: 140) {
                  ...GatsbySanityImageFixed
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout title="Sortiment" description="Våra viner">
      <Section className="flex-row justify-center pt-3 mt-12">
        <H1>Våra Viner</H1>
      </Section>
      <Section className="flex-row justify-center mt-8 mb-6">
        <TabButtons privateCustomer={privateCustomer} />
      </Section>
      {privateCustomer ? (
        <Section className="my-6 flex-col">
          <H4 className="mx-6">Sortiment för privata kunder</H4>
          <ProductCardList
            data={allSanityWine.edges.concat(allSanityWineCase.edges)}
            privateCustomer
          />
        </Section>
      ) : (
        <Section className="my-6 flex-col">
          <H4 className="mx-6">Sortiment för restauranger</H4>
          <ProductCardList data={allSanityWine.edges} />
        </Section>
      )}
    </Layout>
  );
};

export default Sortiment;
