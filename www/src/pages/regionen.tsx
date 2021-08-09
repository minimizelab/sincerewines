import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import Content from '@sanity/block-content-to-react';
import H1 from '../atoms/H1';
import { pageSerializers } from '../utils/serializers';
import siteConfig from '../config/siteConfig';
import { C } from '../types/types';
import { GetStaticProps } from 'next';
import { client } from '../services/sanity';
import groq from 'groq';

interface Props {
  page: RegionPage;
}

interface RegionPage {
  title: string;
  content: unknown;
}

const TheRegion: C<Props> = ({ page }) => (
  <Layout title={page.title}>
    <Section className="flex-row justify-center pt-3 mt-12">
      <H1>{page.title}</H1>
    </Section>
    <Section className="justify-center p-6">
      <div className="sm:w-10/12 xl:w-1/2 flex flex-col pt-3 mb-6">
        <Content
          blocks={page.content}
          serializers={pageSerializers}
          projectId={siteConfig.projectId}
          dataset={siteConfig.dataset}
        />
      </div>
    </Section>
  </Layout>
);

export default TheRegion;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const theRegionQuery = groq`*[_type == "regionPage"][0]`;
  let props: Props;
  try {
    const page = await client.fetch<RegionPage>(theRegionQuery);

    props = { page };
  } catch (error) {
    throw Error(error);
  }
  return {
    props,
    revalidate: 120,
  };
};
