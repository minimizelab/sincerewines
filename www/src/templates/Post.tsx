import React, { FunctionComponent } from 'react';
import Content from '@sanity/block-content-to-react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Post } from '../types/types';
import { pageSerializers } from '../utils/serializers';

interface Props {
  data: {
    sanityPost: Post;
  };
}

const PostTemplate: FunctionComponent<Props> = ({
  data: { sanityPost: post },
}) => {
  return (
    <Layout title={post.title} description={post.intro}>
      <Section className="flex-row justify-center mx-3 pt-3 mt-12 mb-6">
        <H1 className="text-center">{post.title}</H1>
      </Section>
      <Section className="p-8">
        <div className="flex flex-column bg-white rounded shadow p-4">
          <div className="flex flex-row w-full p-4">
            <Img fluid={post.asset.fluid} />
          </div>
          <div className="flex flex-row w-full p-4">
            <Content blocks={post._rawContent} serializers={pageSerializers} />
          </div>
        </div>
      </Section>
    </Layout>
  );
};
export default PostTemplate;

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    sanityPost(path: { current: { eq: $slug } }) {
      ...Post
      featureImage {
        asset {
          fluid(maxWidth: 1440) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
