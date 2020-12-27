import groq from 'groq';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import H1 from '../../atoms/H1';
import Section from '../../atoms/Section';
import AssortmentHeader from '../../molecules/AssortmentHeader';
import SortDropdown from '../../molecules/SortDropdown';
import Layout from '../../organisms/Layout';
import ProductCardList from '../../organisms/ProductCardList';
import TabButtons from '../../organisms/TabButtons';
import { client } from '../../services/sanity';
import { State } from '../../store';
import { WineItem, C } from '../../types/types';

const sortByList = [
  { value: 'name', text: 'vinets namn' },
  { value: 'type', text: 'vinets typ' },
  { value: 'producer', text: 'producent' },
];

interface Props {
  wines: Array<WineItem>;
}

const Sortiment: C<Props> = ({ wines }) => {
  const [sortBy, setSortBy] = useState(sortByList[0].value);
  const privateCustomer = useSelector<State, boolean>(
    (state) => state.ui.privateCustomer
  );

  const sortEdges = (data: Array<WineItem>): Array<WineItem> => {
    return data.sort((a, b) => {
      if (sortBy === 'producer') {
        if (a._type === 'wineCase' || b._type === 'wineCase') return 0;
        return a.producer.name > b.producer.name
          ? 1
          : b.producer.name > a.producer.name
          ? -1
          : 0;
      } else {
        return a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0;
      }
    });
  };
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
          <AssortmentHeader privateCustomer={true}>
            <SortDropdown sortByList={sortByList} setSortBy={setSortBy} />
          </AssortmentHeader>
          <ProductCardList data={sortEdges(wines)} privateCustomer />
        </Section>
      ) : (
        <Section className="my-6 flex-col">
          <AssortmentHeader privateCustomer={false}>
            <SortDropdown sortByList={sortByList} setSortBy={setSortBy} />
          </AssortmentHeader>
          <ProductCardList
            data={sortEdges(wines.filter((d) => d._type !== 'wineCase'))}
          />
        </Section>
      )}
    </Layout>
  );
};

export default Sortiment;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const winesQuery = groq`*[_type in ["wine", "wineCase"]] {
    _id,
    _type,
    name,
    year,
    type,
    caseWines[]{"wine": wine-> {producer->, grapes[]->}, quantity},
    "path": path.current,
    grapes[]->,
    district->,
    desc,
    "image": image.asset->,
    producer->,
    articleNumber,
    vol,
    packageRequirement,
    alc,
    assortment,
    price,
    link,
  }`;
  let props: Props;
  try {
    const wines = await client.fetch<Array<WineItem>>(winesQuery);
    props = { wines };
  } catch (error) {
    throw Error(error);
  }
  return {
    props,
    revalidate: 120,
  };
};
