import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import { useStaticQuery, graphql } from 'gatsby';
import H4 from '../atoms/H4';
import Text from '../atoms/Text';
import Img from 'gatsby-image';
import TextUppercase from '../atoms/TextUppercase';
import ArrowLink from '../atoms/ArrowLink';
import { Producer } from '../types/types';
import { createArrayString } from '../utils/functions';

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
        {data.allSanityProducer.edges
          // .sort(
          //   (a, b) =>
          //     a.node.childMarkdownRemark.frontmatter.order -
          //     b.node.childMarkdownRemark.frontmatter.order
          // )
          .map(({ node: producer }) => (
            <div
              key={producer.id}
              className="flex flex-row flex-wrap w-full rounded shadow bg-white my-4 md:my-6 "
            >
              <div className="p-8 w-full lg:w-7/12 flex flex-col">
                <H4 className="mb-4">{producer.name}</H4>
                <Text className="my-4">{producer.intro}</Text>
                <TextUppercase>Druvor</TextUppercase>
                <Text>
                  {createArrayString(producer.grapes.map(item => item.name))}
                </Text>
                <div className="flex flex-row flex-grow items-end mt-2 justify-end">
                  <ArrowLink to={`/producenter/${producer.path.current}`}>
                    Läs mer om producenten
                  </ArrowLink>
                </div>
              </div>
              <div className="w-full lg:w-5/12 max-h-400">
                <Img
                  className="h-full w-full"
                  fluid={producer.mainImg.asset.fluid}
                ></Img>
              </div>
            </div>
          ))}
      </Section>
    </Layout>
  );
};

export default Sortiment;
