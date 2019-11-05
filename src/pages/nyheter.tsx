import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import TextLarge from '../atoms/TextLarge';
import MailLink from '../molecules/MailLink';

const Nyheter: FunctionComponent = () => (
  <Layout title="Nyheter">
    <Section className="justify-center p-6">
      <div className="sm:w-8/12 xl:w-2/5 flex flex-col pt-3 mt-6 mb-6">
        <H1>Nyhetsbrev</H1>
        <TextLarge>
          Vill du hålla dig uppdaterad på vad som händer kring Sincere Wines?
        </TextLarge>
        <TextLarge className="my-4">
          Skicka ett email med dina kontaktuppgifter till:
        </TextLarge>
        <MailLink />
      </div>
    </Section>
  </Layout>
);

export default Nyheter;
