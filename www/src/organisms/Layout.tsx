import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import { combineClasses } from '@minimizelab/mini_utils';
import CookieDialog from './CookieDialog';
import Header from './Header';

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
  return (
    <div className={rootClassName}>
      <Helmet>
        <meta charSet="utf-8" />
        {description && <meta name="description" content={description} />}
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
