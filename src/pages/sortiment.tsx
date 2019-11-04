import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import ProductCardList from '../organisms/ProductCardList';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import H4 from '../atoms/H4';

const Sortiment: FunctionComponent = () => (
  <Layout title="Sortiment">
    <Section className="flex-row justify-center pt-3 mt-12 mb-6">
      <H1>Våra Viner</H1>
    </Section>
    <Section className="mb-6 flex-col">
      <H4 className="mx-6">Systembolaget (Beställning)</H4>
      <ProductCardList systembolaget />
      <H4 className="mx-6">Restauranger</H4>
      <ProductCardList />
    </Section>
  </Layout>
);

export default Sortiment;
