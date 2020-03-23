import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import HeaderImage from '../organisms/HeaderImage';
import DetailedLinks from '../organisms/DetailedLinks';
import Section from '../atoms/Section';
import H3 from '../atoms/H3';
import ProductCardList from '../organisms/ProductCardList';
import QuoteImage from '../organisms/QuoteImage';
import Greeting from '../organisms/Greeting';
import ArrowLink from '../atoms/ArrowLink';
import { useStaticQuery, graphql } from 'gatsby';
import { Wine } from '../types/types';

interface Data {
  sanitySettings: {
    title: string;
  };
  sanityHomePage: {
    headerTitle: string;
    headerSubTitle: string;
    _rawGreetingContent: unknown;
    greetingTitle: string;
    wines: Wine[];
    links: { title: string; subTitle: string; link: string }[];
  };
}

const Index: FunctionComponent = () => {
  const {
    sanitySettings: { title },
    sanityHomePage: {
      headerTitle,
      headerSubTitle,
      links,
      wines,
      _rawGreetingContent,
      greetingTitle,
    },
  } = useStaticQuery<Data>(graphql`
    query homePageQuery {
      sanitySettings {
        title
      }
      sanityHomePage {
        headerTitle
        headerSubTitle
        wines {
          ...Wine
          image {
            asset {
              url
              metadata {
                dimensions {
                  aspectRatio
                }
              }
            }
          }
        }
        links {
          title
          subTitle
          link
        }
        greetingTitle
        _rawGreetingContent
      }
    }
  `);
  return (
    <Layout
      title={title}
      description="Vi är en svensk vinimportör med fokus på viner från Österrike.
                De producenter vi väljer att samarbeta med har höga ambitioner
                avseende både kvalitet och hållbarhet, är innovativa och visar
                stor lyhördhet för vinmarknadens utveckling."
    >
      <HeaderImage title={headerTitle} subTitle={headerSubTitle} />
      <Section>
        <DetailedLinks links={links} />
      </Section>
      <Section className="flex-col mb-10 mt-8">
        <H3 className="mb-4 mx-6">Våra senaste viner</H3>
        <ProductCardList data={wines.map(wine => ({ node: wine }))} />
        <div className="self-end mr-6">
          <ArrowLink to="/sortiment">Våra viner</ArrowLink>
        </div>
      </Section>
      <QuoteImage />
      <Section>
        <Greeting title={greetingTitle} body={_rawGreetingContent} />
      </Section>
    </Layout>
  );
};
export default Index;
