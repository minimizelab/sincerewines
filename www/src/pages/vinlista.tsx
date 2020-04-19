import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../store';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import { graphql, useStaticQuery } from 'gatsby';
import { Wine, WineCase } from '../types/types';
import ProductCardList from '../organisms/ProductCardList';

const Vinlista: FunctionComponent = () => {
  const wineList = useSelector<State, { id: string; quantity: number }[]>(
    (state) => state.list.wineList
  );

  const {
    allSanityWine,
    allSanityWineCase,
  }: {
    allSanityWine: { edges: Array<{ node: Wine }> };
    allSanityWineCase: { edges: Array<{ node: WineCase | Wine }> };
  } = useStaticQuery(graphql`
    query WineItemsQuery {
      allSanityWine {
        edges {
          node {
            ...Wine
            image {
              asset {
                url
                metadata {
                  dimensions {
                    aspectRatio
                  }
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
                url
                metadata {
                  dimensions {
                    aspectRatio
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout title="Vinlista" description="Din vinlista">
      <Section className="flex-row justify-center pt-3 mt-12">
        <H1>Vinlista</H1>
      </Section>
      <Section className="my-6 flex-col">
        <ProductCardList
          wineList
          data={allSanityWine.edges.filter((item) =>
            wineList.map((wine) => wine.id).includes(item.node.id)
          )}
        />
      </Section>
    </Layout>
  );
};

export default Vinlista;
