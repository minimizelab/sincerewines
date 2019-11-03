import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import TextLarge from '../atoms/TextLarge';
import MailLink from '../molecules/MailLink';

const About: FunctionComponent = () => (
  <Layout title="Om oss">
    <Section className="justify-center">
      <div className="w-3/5 flex flex-col pt-3 mt-12 mb-6">
        <H1>Om oss</H1>
        <TextLarge>
          Vi är en svensk vinimportör med fokus på viner från Österrike. Vi vill
          uppfattas som en pålitlig och passionerad partner till den nya
          generationens vinmakare från området. De producenter vi väljer att
          samarbeta med har höga ambitioner avseende både kvalitet och
          hållbarhet, är innovativa och har stor förnyelsekraft. Vår filosofi
          bygger på förtroende, kvalitet, öppenhet och tillförlitlighet. Passion
          i vad vi gör och vad vi representerar – SincereWines.
        </TextLarge>
        <TextLarge className="my-4">
          Sincere Wines AB startades 2018 och består idag av fyra partners.
        </TextLarge>
        <MailLink />
      </div>
    </Section>
  </Layout>
);

export default About;
