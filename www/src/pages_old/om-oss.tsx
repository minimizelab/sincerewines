import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import TextLarge from '../atoms/TextLarge';
import Content from '@sanity/block-content-to-react';
import Partner from '../molecules/Partner';
import { useStaticQuery, graphql } from 'gatsby';
import { pageSerializers } from '../utils/serializers';
import { projectId, dataset } from '../config/siteConfig';

interface Data {
  sanityAboutUsPage: {
    title: string;
    _rawContent: unknown;
    partnersIntro: string;
    partners: Array<{
      name: string;
      phone: string;
      email: string;
    }>;
  };
}

const About: FunctionComponent = () => {
  const { sanityAboutUsPage: page } = useStaticQuery<Data>(graphql`
    query aboutUsPageQuery {
      sanityAboutUsPage {
        title
        _rawContent
        partnersIntro
        partners {
          name
          email
          phone
        }
      }
    }
  `);
  return (
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
                  blocks={page._rawContent}
                  serializers={pageSerializers}
                  projectId={projectId}
                  dataset={dataset}
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
};
export default About;
