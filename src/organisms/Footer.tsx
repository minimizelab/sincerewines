import React, { FunctionComponent } from 'react';
import FooterSection from '../molecules/FooterSection';
import { Link } from 'gatsby';

const Footer: FunctionComponent = () => (
  <footer className="absolute bottom-0 flex flex-row w-screen items-end justify-between p-8 flex-wrap">
    <div className="flex flex-row items-start lg:w-auto w-full flex-wrap">
      <FooterSection title="Kontakt">
        <a href="mailto:mail@sincerewines.com">mail@sincerewines.com</a>
        <a href="tel:+46707307057">+46 70 73 07 057</a>
      </FooterSection>
      <FooterSection title="Besöksadress">
        <span>Bergfotsvägen 28</span>
        <span>305 91 Halmstad</span>
        <span>Sweden</span>
      </FooterSection>
      <FooterSection title="Snabblänkar">
        <Link>Ställ en fråga</Link>
        <Link>Läs mer om hur du beställer</Link>
      </FooterSection>
    </div>
    <div className="flex flex-col items-end justify-end p-4 flex-grow">
      <h4 className="md:text-2xl text-xl font-serif text-sincere-green">
        Sincere Wines
      </h4>
      <span className="font-sans text-base">
        Copyright © All rights reserved
      </span>
    </div>
  </footer>
);

export default Footer;
