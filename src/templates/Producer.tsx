import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import { graphql } from 'gatsby';
import H4 from '../atoms/H4';
import MarkdownWrapper from '../molecules/MarkdownWrapper';
import Img from 'gatsby-image';

interface Props {
  data: any;
}

const Producer: FunctionComponent<Props> = ({ data }) => (
  <Layout title={data.markdownRemark.frontmatter.title}>
    <Section className="flex-row justify-center p-8 mt-12 mb-6">
      <H1>{data.markdownRemark.frontmatter.title}</H1>
    </Section>
    <Section className="p-8">
      <div className="flex flex-row flex-wrap-reverse bg-white p-4">
        <div className="flex flex-col p-4 w-full md:w-2/5 lg:w-1/4">
          {data.allMakersJson.edges
            .filter(
              ({ node }: any) =>
                node.producer === data.markdownRemark.frontmatter.title
            )
            .map(({ node }: any) => (
              <div className="flex flex-col w-full mb-4">
                <div className="mb-2 w-full h-500 md:h-400">
                  <Img
                    imgStyle={{
                      objectPosition: '50% 0',
                    }}
                    className="w-full h-full"
                    fluid={node.img.childImageSharp.fluid}
                  />
                </div>
                <H4>{node.name}</H4>
              </div>
            ))}
        </div>
        <div className="flex flex-col w-full md:w-3/5 lg:w-3/4 p-4">
          <H4 className="pb-4">Om Producenten</H4>
          <MarkdownWrapper html={data.markdownRemark.html}></MarkdownWrapper>
        </div>
      </div>
    </Section>
    <Section className="p-2 flex-wrap">
      {data.markdownRemark.frontmatter.images.map((img: any) => (
        <div className="w-full md:w-1/3 p-6 max-h-500">
          <Img className="w-full h-full" fluid={img.childImageSharp.fluid} />
        </div>
      ))}
    </Section>
  </Layout>
);

export default Producer;

export const pageQuery = graphql`
  query ProducerPage($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        images {
          childImageSharp {
            fluid(maxWidth: 720, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
    allMakersJson {
      edges {
        node {
          name
          producer
          img {
            childImageSharp {
              fluid(maxWidth: 640, maxHeight: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
