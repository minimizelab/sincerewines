import groq from 'groq';
import { GetStaticProps } from 'next';
import ArrowLink from '../atoms/ArrowLink';
import H3 from '../atoms/H3';
import Section from '../atoms/Section';
import DetailedLinks from '../organisms/DetailedLinks';
import Greeting from '../organisms/Greeting';
import HeaderImage from '../organisms/HeaderImage';
import Layout from '../organisms/Layout';
import ProductCardList from '../organisms/ProductCardList';
import QuoteImage from '../organisms/QuoteImage';
import { client } from '../services/sanity';
import { C, Link, Wine } from '../types/types';

interface Props {
  title: string;
  homePage: HomePage;
}

interface HomePage {
  headerTitle: string;
  headerSubTitle: string;
  headerAction: Link;
  greetingContent: unknown;
  greetingTitle: string;
  quote: string;
  quoteAction: Link;
  wines: Array<Wine>;
  links: { title: string; subTitle: string; link: string }[];
}

const Index: C<Props> = ({
  title,
  homePage: {
    links,
    wines,
    headerAction,
    headerSubTitle,
    headerTitle,
    quote,
    quoteAction,
    greetingTitle,
    greetingContent,
  },
}) => (
  <Layout
    title={title}
    description="Vi är en svensk vinimportör med fokus på viner från Österrike.
              De producenter vi väljer att samarbeta med har höga ambitioner
              avseende både kvalitet och hållbarhet, är innovativa och visar
              stor lyhördhet för vinmarknadens utveckling."
  >
    <HeaderImage
      title={headerTitle}
      subTitle={headerSubTitle}
      link={headerAction}
    />
    <Section>
      <DetailedLinks links={links} />
    </Section>
    <Section className="flex-col mb-10 mt-8">
      <H3 className="mb-4 mx-6">Våra senaste viner</H3>
      <ProductCardList privateCustomer data={wines} />
      <div className="self-end mr-6">
        <ArrowLink to="/sortiment">Våra viner</ArrowLink>
      </div>
    </Section>
    <QuoteImage text={quote} link={quoteAction} />
    <Section>
      <Greeting title={greetingTitle} body={greetingContent} />
    </Section>
  </Layout>
);

export default Index;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const settingsQuery = groq`*[_type == "settings"] {title}[0]`;
  const homePageQuery = groq`*[_type == "homePage"] {
    headerTitle,
    headerSubTitle,
    headerAction,
    links,
    wines[]->{
      _id,
      _type,
      name,
      year,
      type,
      caseWines[]{"wine": wine-> {producer->, grapes[]->}, quantity},
      "path": path.current,
      grapes[]->,
      district->,
      desc,
      "image": image.asset->,
      producer->,
      articleNumber,
      vol,
      packageRequirement,
      alc,
      assortment,
      price,
      link,
    },
    quote,
    quoteAction,
    greetingTitle,
    greetingContent,
  }[0]`;
  let props: Props;
  try {
    const settings = await client.fetch<{ title: string }>(settingsQuery);
    const homePage = await client.fetch<HomePage>(homePageQuery);
    props = { title: settings.title, homePage };
  } catch (error) {
    throw Error(error);
  }
  return {
    props,
    revalidate: 120,
  };
};
