import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import TextLarge from '../atoms/TextLarge';
import ArrowLink from '../atoms/ArrowLink';

const Bestallningar: FunctionComponent = () => (
  <Layout title="Regionen">
    <Section className="justify-center p-6">
      <div className="sm:w-8/12 xl:w-2/5 flex flex-col pt-3 mt-6 mb-6">
        <H1>Regionen</H1>
        <TextLarge>
          Snart kommer mer information om vinlandet Österrike och dess olika
          regioner.
        </TextLarge>
        <TextLarge className="my-4">
          Under tiden kan du läsa mer om hur våra producenter arbetar för att
          leverera viner av högsta kvalitet.
        </TextLarge>
        <ArrowLink to="/producenter">läs mer om våra producenter</ArrowLink>
      </div>
    </Section>
  </Layout>
);

export default Bestallningar;
