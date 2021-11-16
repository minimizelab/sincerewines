import { useMemo } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import { pageSerializers } from '../utils/serializers';
import { useSelector } from 'react-redux';
import { State } from '../store';
import TabButtons from '../organisms/TabButtons';
import { C } from '../types/types';
import { GetStaticProps } from 'next';
import groq from 'groq';
import { getClient } from '../lib/sanity.server';
import { PortableText } from '../lib/sanity.client';

interface OrdersPage {
  consumerTitle: string;
  restaurantTitle: string;
  restaurantContent: unknown;
  consumerContent: unknown;
}

interface Props {
  page: OrdersPage;
}

const Orders: C<Props> = ({ page }) => {
  const privateCustomer = useSelector<State, boolean>(
    (state) => state.ui.privateCustomer
  );
  const { title, content } = useMemo(
    () =>
      !privateCustomer
        ? {
            title: page.restaurantTitle,
            content: page.restaurantContent,
          }
        : {
            title: page.consumerTitle,
            content: page.consumerContent,
          },
    [page, privateCustomer]
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
          <PortableText blocks={content} serializers={pageSerializers} />
        </div>
      </Section>
    </Layout>
  );
};

export default Orders;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = getClient();
  const ordersPageQuery = groq`*[_type == "ordersPage"]`;
  let props: Props;
  try {
    const [page] = await client.fetch<Array<OrdersPage>>(ordersPageQuery);
    props = { page };
  } catch (_) {
    throw Error('Failed to fetch orders page');
  }
  return {
    props,
    revalidate: 120,
  };
};
