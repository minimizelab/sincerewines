import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import Content from '@sanity/block-content-to-react';
import H1 from '../atoms/H1';
import { graphql, useStaticQuery } from 'gatsby';
import { pageSerializers } from '../utils/serializers';
import { projectId, dataset } from '../config/siteConfig.js';

interface Data {
  sanityRegionPage: {
    title: string;
    _rawContent: unknown;
  };
}

const Bestallningar: FunctionComponent = () => {
  const {
    sanityRegionPage: { title, _rawContent },
  } = useStaticQuery<Data>(graphql`
    query regionPageQuery {
      sanityRegionPage {
        title
        _rawContent
      }
    }
  `);
  return (
    <Layout title={title}>
      <Section className="flex-row justify-center pt-3 mt-12">
        <H1>{title}</H1>
      </Section>
      <Section className="justify-center p-6">
        <div className="sm:w-10/12 xl:w-1/2 flex flex-col pt-3 mb-6">
          <Content
            blocks={_rawContent}
            serializers={pageSerializers}
            projectId={projectId}
            dataset={dataset}
          />
        </div>
      </Section>
    </Layout>
  );
};

export default Bestallningar;
