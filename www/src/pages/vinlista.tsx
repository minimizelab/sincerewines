import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/list';
import { AppDispatch } from '../store';
import { State } from '../store';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import { C, Wine, WineCase, WineListItem } from '../types/types';
import ProductCardList from '../organisms/ProductCardList';
import H3 from '../atoms/H3';
import H4 from '../atoms/H4';
import Button from '../molecules/Button';
import H5 from '../atoms/H5';
import Text from '../atoms/Text';
import ArrowLink from '../atoms/ArrowLink';
import { GetStaticProps } from 'next';
import groq from 'groq';
import { getClient } from '../lib/sanity.server';

interface Props {
  wines: Array<Wine>;
  wineCases: Array<WineCase>;
}

const Vinlista: C<Props> = ({ wines, wineCases }) => {
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

  const wineData = useMemo(() => {
    const wineListIds = wineList.map((wine) => wine.id);
    const wine: Array<Wine | WineCase> = [];

    return wine
      .concat(wines)
      .concat(wineCases)
      .filter(({ _id }) => wineListIds.includes(_id));
  }, [wineList]);
  const totalPrice = useMemo(() => {
    let total = 0;
    wineList.forEach((wine) => {
      const price = wineData.filter((node) => node._id === wine.id)[0].price;
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
            {privateCustomer ? <H4>Privatkund</H4> : <H4>Restaurangkund</H4>}
            <p
              className="cursor-pointer uppercase tracking-wider text-xs font-sans"
              onClick={(): void => deleteAllWines()}
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
            <Button onClick={(): void => window.print()}>
              {privateCustomer ? 'Skriv ut lista' : 'Skriv ut lista för offert'}
            </Button>
          </div>
        </Section>
      )}
    </Layout>
  );
};

export default Vinlista;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = getClient();
  const wineQuery = groq`*[_type == "wine"]`;
  const wineCaseQuery = groq`*[_type == "wineCase"]`;
  let props: Props;
  try {
    const wines = await client.fetch<Array<Wine>>(wineQuery);
    const wineCases = await client.fetch<Array<WineCase>>(wineCaseQuery);
    props = { wineCases, wines };
  } catch (error) {
    throw Error(error);
  }
  return {
    props,
    revalidate: 120,
  };
};
