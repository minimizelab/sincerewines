import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import CookieDialog from './CookieDialog';
import Header from './Header';
import usePersistStore from '../hooks/usePersistStore';
import { combineClasses } from '../utils/functions';

interface Props {
  title: string;
  className?: string;
  description?: string;
}

const defaultClassNames =
  'min-h-screen flex flex-col w-full bg-sincere-background';

const Layout: FunctionComponent<Props> = ({
  title,
  children,
  className,
  description,
}) => {
  const rootClassName = className
    ? combineClasses([defaultClassNames, className])
    : defaultClassNames;
  const initialized = usePersistStore();
  return (
    <div className={rootClassName}>
      <Head>
        <meta charSet="utf-8" />
        {description && <meta name="description" content={description} />}
        <link rel="shortcut icon" href="/assets/icon.png" />
        <title>{title}</title>
        {/* <html lang="sv" /> TODO: Add this back once the bug related to this is gone */}
      </Head>
      {initialized && (
        <>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CookieDialog />
        </>
      )}
    </div>
  );
};

export default Layout;
