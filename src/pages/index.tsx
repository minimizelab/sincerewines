import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import HeaderImage from '../organisms/HeaderImage';
import DetailedLinks from '../organisms/DetailedLinks';
import Section from '../atoms/Section';
import H3 from '../atoms/H3';
import ProductCardList from '../organisms/ProductCardList';

const Index: FunctionComponent = () => (
  <Layout title="Sincere Wines">
    <HeaderImage />
    <Section>
      <DetailedLinks />
      {/* <div className="flex flex-col justify-center items-center"> */}
    </Section>
    <H3>Våra senaste viner</H3>
    <Section className="p-2">
      <ProductCardList short />
    </Section>
    <h1 className="pb-6 md:text-5xl text-3xl font-serif text-sincere-green text-center">
      Den här sidan är under uppbyggnad
    </h1>
  </Layout>
);

export default Index;
