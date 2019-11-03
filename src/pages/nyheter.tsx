import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import TextLarge from '../atoms/TextLarge';
import MailLink from '../molecules/MailLink';

const Nyheter: FunctionComponent = () => (
  <Layout title="Om oss">
    <Section className="justify-center">
      <div className="w-2/5 flex flex-col m-12">
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
