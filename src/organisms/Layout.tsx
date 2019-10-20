import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';

interface Props {
  title: string;
}

const Layout: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <header>Header</header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
