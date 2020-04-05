import React, { FunctionComponent, useMemo } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import Content from '@sanity/block-content-to-react';
import H1 from '../atoms/H1';
import { graphql, useStaticQuery } from 'gatsby';
import { pageSerializers } from '../utils/serializers';
import { useSelector } from 'react-redux';
import { State } from '../store';
import TabButtons from '../organisms/TabButtons';
import { projectId, dataset } from '../config/siteConfig.js';

interface Data {
  sanityOrdersPage: {
    consumerTitle: string;
    restaurantTitle: string;
    _rawRestaurantContent: unknown;
    _rawConsumerContent: unknown;
  };
}

const Bestallningar: FunctionComponent = () => {
  const privateCustomer = useSelector<State, boolean>(
    (state) => state.ui.privateCustomer
  );
  const { sanityOrdersPage } = useStaticQuery<Data>(graphql`
    query ordersPageQuery {
      sanityOrdersPage {
        consumerTitle
        restaurantTitle
        _rawRestaurantContent
        _rawConsumerContent
      }
    }
  `);
  const { title, _rawContent } = useMemo(
    () =>
      !privateCustomer
        ? {
            title: sanityOrdersPage.restaurantTitle,
            _rawContent: sanityOrdersPage._rawRestaurantContent,
          }
        : {
            title: sanityOrdersPage.consumerTitle,
            _rawContent: sanityOrdersPage._rawConsumerContent,
          },
    [sanityOrdersPage, privateCustomer]
  );
  return (
    <Layout title={title}>
      <Section className="flex-row justify-center pt-3 mt-12">
        <H1>{title}</H1>
      </Section>
      <Section className="flex-row justify-center mt-6">
        <TabButtons privateCustomer={privateCustomer} />
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
