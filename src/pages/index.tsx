import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import HeaderImage from '../organisms/HeaderImage';
import DetailedLinks from '../organisms/DetailedLinks';
import Section from '../atoms/Section';

const Index: FunctionComponent = () => (
  <Layout title="Sincere Wines">
    <HeaderImage />
    <Section>
      <DetailedLinks />
      {/* <div className="flex flex-col justify-center items-center"> */}
    </Section>
    <h1 className="pb-6 md:text-5xl text-3xl font-serif text-sincere-green text-center">
      Den här sidan är under uppbyggnad
    </h1>
  </Layout>
);

export default Index;
