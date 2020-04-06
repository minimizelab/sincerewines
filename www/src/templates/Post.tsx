import React, { FunctionComponent } from 'react';
import Content from '@sanity/block-content-to-react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import H5 from '../atoms/H5';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Post } from '../types/types';
import { pageSerializers } from '../utils/serializers';
import TextUppercase from '../atoms/TextUppercase';
import ArrowLink from '../atoms/ArrowLink';

interface Props {
  data: {
    sanityPost: Post;
  };
}

const PostTemplate: FunctionComponent<Props> = ({
  data: { sanityPost: post },
}) => {
  console.log(post.featureImage);
  return (
    <Layout title={post.title} description={post.intro}>
      <Section className="flex-row justify-center mx-3 pt-3 mt-12 mb-6">
        <div className="flex flex-col justify-center">
          <H1 className="text-center">{post.title}</H1>
          <TextUppercase className="text-center">Publicerades</TextUppercase>
          <H5 className="text-center">{post.date}</H5>
        </div>
      </Section>
      <Section className="flex flex-row p-8 justify-center">
        <div className="flex flex-col w-full lg:w-10/12 xl:w-7/12 bg-white rounded shadow p-4">
          <div className="flex flex-row w-full p-4">
            <Img className="w-full" fluid={post.featureImage.asset.fluid} />
          </div>
          <div className="flex flex-row w-full p-4">
            <Content blocks={post._rawContent} serializers={pageSerializers} />
          </div>
          <div className="flex flex-row w-full p-4">
            <ArrowLink left to="/nyheter">
              ALLA NYHETER
            </ArrowLink>
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
