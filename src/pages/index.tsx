import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import HeaderImage from '../organisms/HeaderImage';

const Index: FunctionComponent = () => (
  <Layout title="Sincere Wines">
    <HeaderImage />
    <div className="flex flex-col justify-center items-center">
      <h1 className="pb-6 md:text-5xl text-3xl font-serif text-sincere-green text-center">
        Den här sidan är under uppbyggnad
      </h1>
      <h4 className="pb-16 text-lg font-sans font-light text-center">
        Välkommen tillbaka till lanseringen av vår nya webbplats i november!
      </h4>
    </div>
  </Layout>
);

export default Index;
