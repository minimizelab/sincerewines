import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import TextLarge from '../atoms/TextLarge';
import ArrowLink from '../atoms/ArrowLink';

const Bestallningar: FunctionComponent = () => (
  <Layout title="Beställningar">
    <Section className="justify-center p-6">
      <div className="sm:w-8/12 xl:w-2/5 flex flex-col pt-3 mt-6 mb-6">
        <H1>Beställningar</H1>
        <TextLarge>
          Snart kommer mer information om hur du beställer våra viner från
          systembolaget här.
        </TextLarge>
        <TextLarge className="my-4">
          Kontakta oss, eller besök systembolagets webbplats för mer
          information.
        </TextLarge>
        <ArrowLink to="https://www.systembolaget.se/bestalla-drycker/">
          beställa drycker via systembolaget
        </ArrowLink>
      </div>
    </Section>
  </Layout>
);

export default Bestallningar;
