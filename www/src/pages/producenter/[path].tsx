import groq from 'groq';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import React from 'react';
import H1 from '../../atoms/H1';
import H4 from '../../atoms/H4';
import Section from '../../atoms/Section';
import Layout from '../../organisms/Layout';
import { Producer, C } from '../../types/types';
import { producerSerializers } from '../../utils/serializers';
import { getClient } from '../../lib/sanity.server';
import { PortableText } from '../../lib/sanity.client';

interface Props {
  producer: Producer;
}

const ProducerPage: C<Props> = ({ producer }) => (
  <Layout title={producer.name} description={producer.intro}>
    <Section className="flex-row justify-center mx-3 pt-3 mt-12 mb-6">
      <H1 className="text-center">{producer.name}</H1>
    </Section>
    <Section className="p-8">
      <div className="flex flex-row flex-wrap-reverse bg-white rounded shadow p-4">
        <div className="flex flex-col p-4 w-full md:w-2/5 lg:w-1/4">
          {producer.makers.map((maker) => (
            <div key={maker.id} className="flex flex-col w-full mb-6">
              <div className="mb-2 w-full h-500 md:h-400 relative">
                <Image
                  priority
                  sizes="(min-width: 0px) 640px"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  src={maker.image.url}
                />
              </div>
              <H4>{maker.name}</H4>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full md:w-3/5 lg:w-3/4 p-4">
          <H4 className="pb-4">Om Producenten</H4>
          <PortableText
            blocks={producer.desc}
            serializers={producerSerializers}
          />
        </div>
      </div>
    </Section>
    <Section className="px-2 pt-2 pb-10 flex-wrap">
      {producer.images.map((img) => (
        <div key={img._id} className="w-full md:w-1/3 p-6 max-h-500 h-270">
          <div className="w-full h-full relative rounded shadow overflow-hidden">
            <Image
              layout="fill"
              sizes="(min-width: 0px) 640px"
              objectFit="cover"
              objectPosition="center"
              src={img.url}
            />
          </div>
        </div>
      ))}
    </Section>
  </Layout>
);

export default ProducerPage;

type ProducerParams = {
  path: string;
};

export const getStaticProps: GetStaticProps<Props, ProducerParams> = async ({
  params,
}) => {
  const client = getClient();
  const producerQuery = groq`*[_type == "producer" && path.current == $path ] {
     "id": _id,
    name,
    intro,
    grapes[]->,
    "image": mainImg.asset->,
    desc,
    "path": path.current,
    "makers": makers[]-> {
      "id": _id,
      name,
      "image": image.asset->
    },
    "images": images[].asset->
  }[0]`;
  let props: Props;
  try {
    const producer = await client.fetch<Producer>(producerQuery, params);
    props = { producer };
  } catch (error) {
    throw Error(error);
  }
  return {
    props,
    revalidate: 120,
  };
};

export const getStaticPaths: GetStaticPaths<ProducerParams> = async () => {
  const client = getClient();
  const producersQuery = groq`*[_type == "producer"] {
    "path": path.current,
  }`;
  let paths: Array<{ params: ProducerParams }>;
  try {
    const producers = await client.fetch<Array<ProducerParams>>(producersQuery);
    paths = producers.map((producer) => ({ params: producer }));
  } catch (error) {
    throw Error(error);
  }

  return { paths, fallback: false };
};
