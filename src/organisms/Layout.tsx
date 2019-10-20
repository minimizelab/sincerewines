import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';

interface Props {
  title: string;
}

const Layout: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-sincere-background">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <header>Header</header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
