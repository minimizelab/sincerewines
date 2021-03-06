import { useSelector } from 'react-redux';
import { State } from '../store';
import Content from '@sanity/block-content-to-react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import WineRow from '../molecules/WineRow';
import ArrowLink from '../atoms/ArrowLink';
import { WineCase, Grape, Producer, C } from '../types/types';
import { createArrayString } from '../utils/functions';
import { wineSerializers } from '../utils/serializers';

interface Props {
  wineCase: WineCase;
}

const WineCaseTemplate: C<Props> = ({ wineCase }) => {
  const privateCustomer = useSelector<State, boolean>(
    (state) => state.ui.privateCustomer
  );
  const { wine } = wineCase.caseWines[0];
  const wineQuantity = wineCase.caseWines.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  return (
    <Layout title={wineCase.name}>
      <Section className="justify-center">
        <div className="m-4 sm:m-8 flex flex-row flex-wrap w-full lg:w-2/3 bg-white rounded shadow p-10">
          <div className="flex flex-col w-full">
            <div className="flex flex-wrap flex-row items-between">
              <div className="w-full sm:w-2/3">
                <H1>{wineCase.name}</H1>
              </div>
            </div>
            <hr className="my-4"></hr>
            <div className="flex flex-wrap flex-row">
              <div className="flex flex-col w-full lg:w-1/2">
                <div className="lg:mr-6">
                  <WineRow
                    title="Druva"
                    value={createArrayString(
                      wineCase.caseWines
                        .map((item) => item.wine.grapes)
                        .reduce((prev, current) => prev.concat(current))
                        .reduce((unique: Array<string>, item: Grape) => {
                          return unique.includes(item.name)
                            ? unique
                            : [...unique, item.name];
                        }, [])
                    )}
                  ></WineRow>
                  <WineRow
                    title="Distrikt"
                    value={
                      wine.district &&
                      `${wine.district.name}, ${wine.district.country}`
                    }
                  ></WineRow>
                  <WineRow
                    title="Producent"
                    value={createArrayString(
                      wineCase.caseWines
                        .map((item) => item.wine.producer)
                        .reduce((unique: Array<string>, item: Producer) => {
                          return unique.includes(item.name)
                            ? unique
                            : [...unique, item.name];
                        }, [])
                    )}
                  ></WineRow>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-1/2">
                <div className="lg:ml-6">
                  <WineRow
                    title="Kvantitet"
                    value={wineQuantity + ' x ' + wine.vol + ' cl'}
                  ></WineRow>
                  {privateCustomer ? (
                    <WineRow
                      title={`Pris ${
                        privateCustomer ? 'privat' : 'restaurang'
                      }`}
                      value={`${
                        wineCase.price !== null
                          ? wineCase.price + ' kr '
                          : 'Kontakta oss!'
                      }`}
                    ></WineRow>
                  ) : (
                    <WineRow
                      title={`Pris ${
                        privateCustomer ? 'privat' : 'restaurang'
                      }`}
                      value="Separat prislista"
                    ></WineRow>
                  )}
                  {wine.assortment === 'Beställningssortiment' ? (
                    <WineRow
                      title="Artikel #"
                      value={wine.articleNumber}
                    ></WineRow>
                  ) : (
                    <WineRow
                      title="Sortiment"
                      value={wineCase.assortment}
                    ></WineRow>
                  )}
                </div>
              </div>
              <div className="flex flex-col"></div>
            </div>
            <hr className="my-4"></hr>
            <Content blocks={wineCase.desc} serializers={wineSerializers} />
            {wineCase.link && (
              <ArrowLink to={wineCase.link}>
                BESTÄLL FRÅN SYSTEMBOLAGET
              </ArrowLink>
            )}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default WineCaseTemplate;
