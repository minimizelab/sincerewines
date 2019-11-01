import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import HeaderImage from '../organisms/HeaderImage';
import DetailedLinks from '../organisms/DetailedLinks';
import Section from '../atoms/Section';
import H3 from '../atoms/H3';
import ProductCardList from '../organisms/ProductCardList';
import QuoteImage from '../organisms/QuoteImage';

const Index: FunctionComponent = () => (
  <Layout title="Sincere Wines">
    <HeaderImage />
    <Section>
      <DetailedLinks />
    </Section>
    <Section className="flex-col my-6">
      <H3 className="m-6">Våra senaste viner</H3>
      <ProductCardList short />
    </Section>
    <QuoteImage />
  </Layout>
);

export default Index;
