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

const Index: FunctionComponent = () => (
  <Layout
    title="Sincere Wines"
    description="Vi är en svensk vinimportör med fokus på viner från Österrike.
                De producenter vi väljer att samarbeta med har höga ambitioner
                avseende både kvalitet och hållbarhet, är innovativa och visar
                stor lyhördhet för vinmarknadens utveckling."
  >
    <HeaderImage />
    <Section>
      <DetailedLinks />
    </Section>
    <Section className="flex-col mb-10 mt-8">
      <H3 className="mb-4 mx-6">Våra senaste viner</H3>
      <ProductCardList short />
      <div className="self-end mr-6">
        <ArrowLink to="/sortiment">Våra viner</ArrowLink>
      </div>
    </Section>
    <QuoteImage />
    <Section>
      <Greeting />
    </Section>
  </Layout>
);

export default Index;