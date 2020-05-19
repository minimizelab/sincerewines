import React, { FunctionComponent, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/list';
import { AppDispatch } from '../store';
import { State } from '../store';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import { graphql, useStaticQuery } from 'gatsby';
import { Wine, WineCase, WineListItem } from '../types/types';
import ProductCardList from '../organisms/ProductCardList';
import H3 from '../atoms/H3';
import H4 from '../atoms/H4';
import Button from '../molecules/Button';
import TextUppercase from '../atoms/TextUppercase';
import H5 from '../atoms/H5';
import Text from '../atoms/Text';
import ArrowLink from '../atoms/ArrowLink';

const Vinlista: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const wineList = useSelector<State, WineListItem[]>(
    (state) => state.list.wineList
  );
  const privateCustomer = useSelector<State, boolean>(
    (state) => state.ui.privateCustomer
  );
  const deleteAllWines = (): void => {
    dispatch(actions.deleteAll());
  };

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
      <Section className="flex-col sm:w-3/5 w-full justify-center items-center pt-3 mt-12">
        <H1 className="mb-6">Vinlista</H1>
        {wineList.length !== 0 ? (
          <div className="flex-row flex justify-between items-end w-full px-6">
            {privateCustomer ? (
              <H4>Privatimport</H4>
            ) : (
              <H4>Restaurangsortiment</H4>
            )}
            <p
              className="cursor-pointer uppercase tracking-wider text-xs font-sans"
              onClick={() => deleteAllWines()}
            >
              Återställ
            </p>
          </div>
        ) : (
          <>
            <Text className="mb-12">
              I vinlistan kan du spara dina favoriter eller skriva ut och ta med
              till ditt närmaste ombud
            </Text>
            <H5>Din vinlista är tom</H5>
            <Text className="mb-8">
              På sortimentsidan kan du välja vilka viner du vill spara i listan
            </Text>
            <ArrowLink to="/sortiment">Gå till sortimentsidan</ArrowLink>
          </>
        )}
      </Section>
      <Section className="sm:w-3/5 w-full mb-2 flex-col">
        <ProductCardList
          privateCustomer={privateCustomer}
          wineList
          data={wineData}
        />
      </Section>
      {wineList.length !== 0 && (
        <Section className="sm:w-3/5 w-full flex-col items-center justify-center py-3 mb-12">
          {privateCustomer && <H3>Totalt: {totalPrice} kr</H3>}
          <div className="mt-8">
            <Button onClick={() => window.print()}>
              {privateCustomer ? 'Skriv ut lista' : 'Skriv ut lista för offert'}
            </Button>
          </div>
        </Section>
      )}
    </Layout>
  );
};

export default Vinlista;
