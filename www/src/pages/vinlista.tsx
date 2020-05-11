import React, { FunctionComponent, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../store';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import { graphql, useStaticQuery } from 'gatsby';
import { Wine, WineCase, WineListItem } from '../types/types';
import ProductCardList from '../organisms/ProductCardList';
import H3 from '../atoms/H3';
import Button from '../molecules/Button';

const Vinlista: FunctionComponent = () => {
  const wineList = useSelector<State, WineListItem[]>(
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

  const wineData = useMemo(() => {
    const wineListIds = wineList.map((wine) => wine.id);
    const wine = allSanityWineCase.edges
      .concat(allSanityWine.edges)
      .filter(({ node }) => wineListIds.includes(node.id));

    return wine;
  }, [wineList]);
  const totalPrice = useMemo(() => {
    let total = 0;
    wineList.forEach((wine) => {
      const price = wineData
        .filter(({ node }) => node.id === wine.id)
        .map((edge) => edge.node)[0].price;
      total += wine.quantity * price;
    });
    return total;
  }, [wineList, wineData]);
  return (
    <Layout title="Vinlista" description="Din vinlista">
      <Section className="flex-row justify-center pt-3 mt-12">
        <H1>Vinlista</H1>
      </Section>
      <Section className="mt-6 mb-2 flex-col">
        <ProductCardList wineList data={wineData} />
      </Section>
      <Section className="flex-col items-center justify-center py-3 mb-12">
        <H3>Totalt: {totalPrice} kr</H3>
        <div className="mt-8">
          <Button onClick={() => window.print()}>Skriv ut lista</Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Vinlista;
