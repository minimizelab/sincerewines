import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';

interface Props {
  data: any;
}

const Wine: FunctionComponent<Props> = ({ data: { winesJson: wine } }) => (
  <Layout title="Sortiment">
    <Section className="flex-row justify-center p-6 mt-12 mb-6">
      <H1>Våra Viner</H1>
    </Section>
  </Layout>
);

export default Wine;
