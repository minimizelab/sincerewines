import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../store';
import Block from '../molecules/Block';
import Text from '../atoms/Text';
import Logotype from '../atoms/Logotype';
import Link from '../atoms/Link';
import Section from '../atoms/Section';
import TabButtons from '../organisms/TabButtons';

const Footer: FunctionComponent = () => {
  const privateCustomer = useSelector<State, boolean>(
    (state) => state.ui.privateCustomer
  );
  return (
    <footer className="bg-white print:invisible">
      <Section className="flex-row items-end justify-between py-6 flex-wrap bg-white">
        <div className="flex flex-row items-start lg:w-auto w-full flex-wrap">
          <Block title="Kontakt">
            <Link to="mailto:mail@sincerewines.com">mail@sincerewines.com</Link>
            <Link to="tel:+46707307057">+46 70 73 07 057</Link>
          </Block>
          <Block title="Besöksadress">
            <Text>Bergfotsvägen 28</Text>
            <Text>305 91 Halmstad</Text>
            <Text>Sweden</Text>
          </Block>
          <Block title="Sortiment">
            <TabButtons privateCustomer={privateCustomer} />
          </Block>
        </div>
        <div className="flex flex-col items-end justify-end py-6 px-8 flex-grow">
          <Logotype />
          <Text>Copyright © All rights reserved </Text>
          <Text>
            Site created by{' '}
            <Link
              className="text-sincere-grape hover:text-sincere-green"
              to="https://minimize.se/"
            >
              minimize
            </Link>
          </Text>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
