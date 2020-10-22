import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import { useStaticQuery, graphql } from 'gatsby';
import { Producer } from '../types/types';
import ProducerCard from '../molecules/ProducerCard';

const Sortiment: FunctionComponent = () => {
  const data: {
    allSanityProducer: {
      edges: Array<{ node: Producer }>;
    };
  } = useStaticQuery(graphql`
    query producersQuery {
      allSanityProducer {
        edges {
          node {
            ...Producer
            mainImg {
              asset {
                fluid(maxWidth: 720, maxHeight: 400) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout title="Producenter" description="Våra vinproducenter">
      <Section className="flex-row justify-center mx-3 pt-3 mt-12 mb-6">
        <H1 className="text-center">Producenter</H1>
      </Section>
      <Section className="mb-6 flex-col items-center px-8">
        <ProducerCard content={data.allSanityProducer.edges} />
      </Section>
    </Layout>
  );
};

export default Sortiment;
