import React, { FunctionComponent, useMemo } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import Content from '@sanity/block-content-to-react';
import H1 from '../atoms/H1';
import { graphql } from 'gatsby';
import { Page } from '../types/types';
import { pageSerializers } from '../utils/serializers';
import { useSelector } from 'react-redux';
import { State } from '../store';
import TabButtons from '../organisms/TabButtons';
import { projectId, dataset } from '../config/siteConfig.js';

interface Props {
  data: {
    sanityPage: Page;
  };
}

const Bestallningar: FunctionComponent<Props> = ({
  data: { sanityPage: page },
}) => {
  const privateCustomer = useSelector<State, boolean>(
    (state) => state.ui.privateCustomer
  );
  const { title, _rawContent } = useMemo(
    () =>
      page.restaurant && !privateCustomer
        ? {
            title: page.restaurantTitle,
            _rawContent: page._rawRestaurantContent,
          }
        : { title: page.consumerTitle, _rawContent: page._rawConsumerContent },
    [page, privateCustomer]
  );
  return (
    <Layout title={title}>
      <Section className="flex-row justify-center pt-3 mt-12">
        <H1>{title}</H1>
      </Section>
      {page.restaurant && (
        <Section className="flex-row justify-center mt-6">
          <TabButtons privateCustomer={privateCustomer} />
        </Section>
      )}
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

export const pageQuery = graphql`
  query Page($slug: String!) {
    sanityPage(path: { current: { eq: $slug } }) {
      ...PageFragment
    }
  }
`;

export default Bestallningar;
