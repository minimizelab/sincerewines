import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../store';
import Layout from '../organisms/Layout';
import ProductCardList from '../organisms/ProductCardList';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import H4 from '../atoms/H4';
import TabButtons from '../organisms/TabButtons';

const Sortiment: FunctionComponent = () => {
  const privateCustomer = useSelector<State, boolean>(
    state => state.ui.privateCustomer
  );

  return (
    <Layout title="Sortiment" description="Våra viner">
      <Section className="flex-row justify-center pt-3 mt-12 mb-6">
        <H1>Våra Viner</H1>
      </Section>
      <Section className="flex-row justify-center mt-8 mb-6">
        <TabButtons privateCustomer={privateCustomer} />
      </Section>
      {privateCustomer ? (
        <Section className="my-6 flex-col">
          <H4 className="mx-6">Sortiment för privata kunder</H4>
          <ProductCardList privateCustomer />
        </Section>
      ) : (
        <Section className="my-6 flex-col">
          <H4 className="mx-6">Sortiment för restauranger</H4>
          <ProductCardList />
        </Section>
      )}
    </Layout>
  );
};

export default Sortiment;
