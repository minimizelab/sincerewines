import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import HeaderImage from '../organisms/HeaderImage';
import DetailedLinks from '../organisms/DetailedLinks';

const Index: FunctionComponent = () => (
  <Layout title="Sincere Wines">
    <HeaderImage />
    <div className="flex flex-col justify-center items-center">
      <DetailedLinks />
      <h1 className="pb-6 md:text-5xl text-3xl font-serif text-sincere-green text-center">
        Den här sidan är under uppbyggnad
      </h1>
    </div>
  </Layout>
);

export default Index;
