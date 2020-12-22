import Content from '@sanity/block-content-to-react';
import { C, Post } from '../../types/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import groq from 'groq';
import React from 'react';
import { pageSerializers } from '../../utils/serializers';
import ArrowLink from '../../atoms/ArrowLink';
import H1 from '../../atoms/H1';
import H5 from '../../atoms/H5';
import Section from '../../atoms/Section';
import TextUppercase from '../../atoms/TextUppercase';
import Layout from '../../organisms/Layout';
import { client } from '../../services/sanity';

interface Props {
  post: Post;
}

const NewsPost: C<Props> = ({ post }) => (
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
        <div className="flex flex-row w-full p-4 justify-center max-h-500">
          <Image
            priority
            width={post.image.metadata.dimensions.width}
            height={post.image.metadata.dimensions.height}
            objectFit="cover"
            objectPosition="center"
            src={post.image.url}
          />
        </div>
        <div className="flex flex-row w-full p-4">
          <Content
            className="max-w-full"
            blocks={post.content}
            serializers={pageSerializers}
          />
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

export default NewsPost;

type PostParams = {
  path: string;
};

export const getStaticProps: GetStaticProps<Props, PostParams> = async ({
  params,
}) => {
  const postQuery = groq`*[_type == "post" && path.current == $path ] {
    _id,
    title,
    date,
    intro,
    "slug": path.current,
    content,
    "image": featureImage.asset->,
  }[0]`;
  let props: Props;
  try {
    const post = await client.fetch<Post>(postQuery, params);
    props = { post };
  } catch (error) {
    throw Error(error);
  }
  return {
    props,
    revalidate: 120,
  };
};

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const postsQuery = groq`*[_type == "post"] {
    "path": path.current,
  }`;
  let paths: Array<{ params: PostParams }>;
  try {
    const posts = await client.fetch<Array<PostParams>>(postsQuery);
    paths = posts.map((post) => ({ params: post }));
  } catch (error) {
    throw Error(error);
  }

  return { paths, fallback: false };
};
