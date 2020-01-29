import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import { combineClasses } from '@minimizelab/mini_utils';
import CookieDialog from './CookieDialog';
import Header from './Header';

interface Props {
  title: string;
  className?: string;
}

const Layout: FunctionComponent<Props> = ({ title, children, className }) => {
  return (
    <div
      className={combineClasses([
        'min-h-screen flex flex-col w-full bg-sincere-background',
        className,
      ])}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CookieDialog />
    </div>
  );
};

export default Layout;
