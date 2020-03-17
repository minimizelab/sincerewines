import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import ProductCardList from '../organisms/ProductCardList';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import H4 from '../atoms/H4';
import Button from '../molecules/Button';
import TabButtons from '../organisms/TabButtons';

const Sortiment: FunctionComponent = () => (
  <Layout title="Sortiment" description="Våra viner">
    <Section className="flex-row justify-center pt-3 mt-12 mb-6">
      <H1>Våra Viner</H1>
    </Section>
    <Section className="flex-row justify-center pt-3 mt-12 mb-6">
      <TabButtons onClick={() => console.log('restprivat')} />
    </Section>
    <Section className="my-6 flex-col">
      <H4 className="mx-6">Systembolagets beställningssortiment</H4>
      <ProductCardList systembolaget />
    </Section>
    <Section className="mb-8 flex-col">
      <H4 className="mx-6">Restaurangsortiment</H4>
      <ProductCardList />
    </Section>
  </Layout>
);

export default Sortiment;
