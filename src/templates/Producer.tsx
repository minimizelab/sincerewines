import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import { graphql } from 'gatsby';
import H4 from '../atoms/H4';
import MarkdownWrapper from '../molecules/MarkdownWrapper';

interface Props {
  data: any;
}

const Producer: FunctionComponent<Props> = ({ data }) => (
  <Layout title={data.markdownRemark.frontmatter.title}>
    <Section className="flex-row justify-center p-8 mt-12 mb-6">
      <H1>{data.markdownRemark.frontmatter.title}</H1>
    </Section>
    <Section className="p-8">
      <div className="flex flex-row bg-white">
        <div className="flex flex-col w-1/5"></div>
        <div className="flex flex-col w-4/5 p-6">
          <H4 className="py-4">Om Producenten</H4>
          <MarkdownWrapper html={data.markdownRemark.html}></MarkdownWrapper>
        </div>
      </div>
    </Section>
  </Layout>
);

export default Producer;

export const pageQuery = graphql`
  query ProducerPage($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
