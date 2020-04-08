import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../store';
import { graphql, useStaticQuery } from 'gatsby';
import { Wine, WineCase, WineData } from '../types/types';
import Layout from '../organisms/Layout';
import ProductCardList from '../organisms/ProductCardList';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import H4 from '../atoms/H4';
import TabButtons from '../organisms/TabButtons';
import SortDropdown from '../molecules/SortDropdown';

const sortByList = [
  { value: 'name', text: 'vinets namn' },
  { value: 'type', text: 'vinets typ' },
  { value: 'producer', text: 'producent' },
];

const Sortiment: FunctionComponent = () => {
  const [sortBy, setSortBy] = useState(sortByList[0].value);
  const privateCustomer = useSelector<State, boolean>(
    (state) => state.ui.privateCustomer
  );

  const sortEdges = (data: WineData[]): WineData[] => {
    return data.sort((a: any, b: any) => {
      if (sortBy === 'producer') {
        return a.node.producer.name > b.node.producer.name
          ? 1
          : b.node.producer.name > a.node.producer.name
          ? -1
          : 0;
      } else {
        return a.node[sortBy] > b.node[sortBy]
          ? 1
          : b.node[sortBy] > a.node[sortBy]
          ? -1
          : 0;
      }
    });
  };

  const {
    allSanityWine,
    allSanityWineCase,
  }: {
    allSanityWine: { edges: Array<{ node: Wine }> };
    allSanityWineCase: { edges: Array<{ node: WineCase | Wine }> };
  } = useStaticQuery(graphql`
    query ProductItemsQuery {
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
    <Layout title="Sortiment" description="Våra viner">
      <Section className="flex-row justify-center pt-3 mt-12">
        <H1>Våra Viner</H1>
      </Section>
      <Section className="flex-row justify-center mt-6 mb-6">
        <TabButtons privateCustomer={privateCustomer} />
      </Section>
      {privateCustomer ? (
        <Section className="my-6 flex-col">
          <div className="flex flex-row justify-between flex-wrap mx-6">
            <H4>Sortiment för privata kunder</H4>
            <SortDropdown sortByList={sortByList} setSortBy={setSortBy} />
          </div>

          <ProductCardList
            data={sortEdges(allSanityWine.edges).concat(
              allSanityWineCase.edges
            )}
            privateCustomer
          />
        </Section>
      ) : (
        <Section className="my-6 flex-col">
          <div className="flex flex-row justify-between mx-6">
            <H4 className="mx-6">Sortiment för restauranger</H4>
            <SortDropdown sortByList={sortByList} setSortBy={setSortBy} />
          </div>
          <ProductCardList data={sortEdges(allSanityWine.edges)} />
        </Section>
      )}
    </Layout>
  );
};

export default Sortiment;
