import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import { graphql } from 'gatsby';
import H4 from '../atoms/H4';
import Img from 'gatsby-image';
import { Producer } from '../types/types';

interface Props {
  data: {
    sanityProducer: Producer;
  };
}

const ProducerTemplate: FunctionComponent<Props> = ({
  data: { sanityProducer: producer },
}) => (
  <Layout title={producer.name}>
    <Section className="flex-row justify-center mx-3 pt-3 mt-12 mb-6">
      <H1 className="text-center">{producer.name}</H1>
    </Section>
    <Section className="p-8">
      <div className="flex flex-row flex-wrap-reverse bg-white rounded shadow p-4">
        <div className="flex flex-col p-4 w-full md:w-2/5 lg:w-1/4">
          {producer.makers.map(maker => (
            <div key={maker.id} className="flex flex-col w-full mb-6">
              <div className="mb-2 w-full h-500 md:h-400">
                <Img
                  imgStyle={{
                    objectPosition: '50% 0',
                  }}
                  className="w-full h-full"
                  fluid={maker.image.asset.fluid}
                />
              </div>
              <H4>{maker.name}</H4>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full md:w-3/5 lg:w-3/4 p-4">
          <H4 className="pb-4">Om Producenten</H4>
          {/* <MarkdownWrapper html={data.markdownRemark.html}></MarkdownWrapper> */}
        </div>
      </div>
    </Section>
    <Section className="px-2 pt-2 pb-10 flex-wrap">
      {producer.images.map(img => (
        <div key={img.asset.id} className="w-full md:w-1/3 p-6 max-h-500">
          <Img
            className="w-full h-full rounded shadow"
            fluid={img.asset.fluid}
          />
        </div>
      ))}
    </Section>
  </Layout>
);

export default ProducerTemplate;

export const pageQuery = graphql`
  query ProducerPage($slug: String!) {
    sanityProducer(path: { current: { eq: $slug } }) {
      ...Producer
      images {
        asset {
          fluid(maxWidth: 720, maxHeight: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
