import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

const Index: FunctionComponent = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Sincere Wines</title>
    </Helmet>
    <main className="px-10 flex flex-row justify-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="pb-6 md:text-5xl text-3xl font-title text-sincere-green text-center ">
          Den här sidan är under uppbyggnad
        </h1>
        <h4 className="pb-16 text-lg font-body font-light text-center">
          Välkommen tillbaka till lanseringen av vår nya webbplats i november!
        </h4>
      </div>
    </main>
    <footer className="absolute bottom-0 w-screen py-8 flex flex-row justify-center">
      <h4 className="md:text-2xl text-xl font-serif font-title text-sincere-green">
        Sincere Wines
      </h4>
    </footer>
  </div>
);

export default Index;
