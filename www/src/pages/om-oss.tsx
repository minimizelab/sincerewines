import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import TextLarge from '../atoms/TextLarge';
import MailLink from '../molecules/MailLink';
import Partner from '../molecules/Partner';

const partnerInfo = [
  {
    name: 'Per Isacson',
    email: 'per@sincerewines.com',
    phone: '+46 73 3582711',
  },
  {
    name: 'Michael Jonsén',
    email: 'michael@sincerewines.com',
    phone: '+45 30 5306777',
  },
  {
    name: 'Magnus Odin',
    email: 'magnus@sincerewines.com',
    phone: '+46 70 7307057',
  },
  {
    name: 'Lars Glemstedt',
    email: 'lars@sincerewines.com',
    phone: '+46 70 3548636',
  },
];

const About: FunctionComponent = () => (
  <Layout
    title="Om oss"
    description="Vi är en svensk vinimportör med fokus på viner från Österrike.
                De producenter vi väljer att samarbeta med har höga ambitioner
                avseende både kvalitet och hållbarhet, är innovativa och visar
                stor lyhördhet för vinmarknadens utveckling."
  >
    <Section className="justify-center px-6">
      <div className="sm:w-10/12 flex flex-col pt-3 mt-12 mb-6">
        <H1>Om oss</H1>
        <div className="flex flex-row w-full justify-between flex-wrap">
          <div className="lg:w-1/2">
            <div className="lg:mr-8">
              <TextLarge className="mb-3">
                Vi är en svensk vinimportör med fokus på viner från Österrike.
                De producenter vi väljer att samarbeta med har höga ambitioner
                avseende både kvalitet och hållbarhet, är innovativa och visar
                stor lyhördhet för vinmarknadens utveckling. Våra kunder är
                restauranger samt privatpersoner med försäljning genom
                Systembolagets olika sortimentsalternativ och genom
                privatimport. Vår filosofi bygger på förtroende, kvalitet,
                öppenhet och tillförlitlighet. Passion i vad vi gör och vad vi
                representerar – Sincere Wines.
              </TextLarge>
              <MailLink />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="lg:ml-8">
              <TextLarge className="mb-3 mt-8 lg:mt-0">
                Sincere Wines AB startades 2018 och består idag av fyra
                partners.
              </TextLarge>
              <div className="flex flex-row w-full flex-wrap">
                {partnerInfo.map(partner => (
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
