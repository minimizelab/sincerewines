import React, { FunctionComponent } from 'react';
import FooterSection from '../molecules/FooterSection';
import Text from '../atoms/Text';
import Logotype from '../atoms/Logotype';
import Link from '../atoms/Link';

const Footer: FunctionComponent = () => (
  <footer className="flex flex-row w-screen items-end justify-between p-6 flex-wrap bg-white">
    <div className="flex flex-row items-start lg:w-auto w-full flex-wrap">
      <FooterSection title="Kontakt">
        <Link to="mailto:mail@sincerewines.com">mail@sincerewines.com</Link>
        <Link to="tel:+46707307057">+46 70 73 07 057</Link>
      </FooterSection>
      <FooterSection title="Besöksadress">
        <Text>Bergfotsvägen 28</Text>
        <Text>305 91 Halmstad</Text>
        <Text>Sweden</Text>
      </FooterSection>
      <FooterSection title="Snabblänkar">
        <Link to="/">Ställ en fråga</Link>
        <Link to="/">Läs mer om hur du beställer</Link>
      </FooterSection>
    </div>
    <div className="flex flex-col items-end justify-end p-4 flex-grow">
      <Logotype />
      <Text>Copyright © All rights reserved</Text>
    </div>
  </footer>
);

export default Footer;
