import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import TextLarge from '../atoms/TextLarge';
import Content from '@sanity/block-content-to-react';
import Partner from '../molecules/Partner';
import { pageSerializers } from '../utils/serializers';
import siteConfig from '../config/siteConfig';
import { GetStaticProps } from 'next';
import { C } from '../types/types';
import groq from 'groq';
import { client } from '../services/sanity';

interface Props {
  page: AboutUsPage;
}

interface AboutUsPage {
  title: string;
  content: unknown;
  partnersIntro: string;
  partners: Array<{
    name: string;
    phone: string;
    email: string;
  }>;
}

const About: C<Props> = ({ page }) => (
  <Layout
    title={page.title}
    description="Vi är en svensk vinimportör med fokus på viner från Österrike.
                De producenter vi väljer att samarbeta med har höga ambitioner
                avseende både kvalitet och hållbarhet, är innovativa och visar
                stor lyhördhet för vinmarknadens utveckling."
  >
    <Section className="justify-center px-6">
      <div className="sm:w-10/12 flex flex-col pt-3 mt-12 mb-6">
        <H1>{page.title}</H1>
        <div className="flex flex-row w-full justify-between flex-wrap">
          <div className="lg:w-1/2">
            <div className="lg:mr-8">
              <Content
                blocks={page.content}
                serializers={pageSerializers}
                projectId={siteConfig.projectId}
                dataset={siteConfig.dataset}
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="lg:ml-8">
              <TextLarge className="mb-3 mt-8 lg:mt-0">
                {page.partnersIntro}
              </TextLarge>
              <div className="flex flex-row w-full flex-wrap">
                {page.partners.map((partner) => (
                  <Partner key={partner.name} {...partner} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default About;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const aboutUsQuery = groq`*[_type == "aboutUsPage"][0]`;
  let props: Props;
  try {
    const page = await client.fetch<AboutUsPage>(aboutUsQuery);

    props = { page };
  } catch (error) {
    throw Error(error);
  }
  return {
    props,
    revalidate: 120,
  };
};
