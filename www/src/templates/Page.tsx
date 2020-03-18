import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import Content from '@sanity/block-content-to-react';
import H1 from '../atoms/H1';
import { graphql } from 'gatsby';
import { Page } from '../types/types';
import { pageSerializers } from '../utils/serializers';

interface Props {
  data: {
    sanityPage: Page;
  };
}

const Bestallningar: FunctionComponent<Props> = ({
  data: { sanityPage: page },
}) => (
  <Layout title={page.title}>
    <Section className="justify-center p-6">
      <div className="sm:w-8/12 xl:w-2/5 flex flex-col pt-3 mt-6 mb-6">
        <H1>{page.title}</H1>
        <Content blocks={page._rawContent} serializers={pageSerializers} />
      </div>
    </Section>
  </Layout>
);

export const pageQuery = graphql`
  query Page($slug: String!) {
    sanityPage(path: { current: { eq: $slug } }) {
      ...PageFragment
    }
  }
`;

export default Bestallningar;
