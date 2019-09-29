import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

const Index: FunctionComponent = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Sincere Wines</title>
    </Helmet>
    <main className="flex flex-row justify-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="pb-20 text-3xl font-body">Site under construction</h1>
        <h4 className="text-lg font-serif font-title">Sincere Wines</h4>
      </div>
    </main>
  </div>
);

export default Index;
