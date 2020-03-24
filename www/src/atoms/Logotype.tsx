import React, { FunctionComponent } from 'react';
import Link from './Link';
import { useStaticQuery, graphql } from 'gatsby';

interface Data {
  sanitySettings: {
    title: string;
  };
}

const Logotype: FunctionComponent = () => {
  const {
    sanitySettings: { title },
  } = useStaticQuery<Data>(graphql`
    query siteLogoType {
      sanitySettings {
        title
      }
    }
  `);
  return (
    <Link
      defaultStyling={false}
      to="/"
      className="font-serif md:text-3xl text-2xl text-sincere-green"
    >
      {title}
    </Link>
  );
};

export default Logotype;
