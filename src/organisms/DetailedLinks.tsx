import React, { FunctionComponent } from 'react';
import DetailedLink from '../molecules/DetailedLink';

const DetailedLinks: FunctionComponent = () => (
  <div className="flex flex-row w-full items-end justify-between m-6 p-6 flex-wrap bg-white -mt-8 z-30">
    <div className="flex flex-row items-start lg:w-auto w-full flex-wrap">
      <DetailedLink to="/producenter" title="Arbetet på gården">
        Läs mer om hur våra producenter arbetar för att leverera viner av högsta
        kvalitet
      </DetailedLink>
      <DetailedLink to="/sortiment" title="Utvalda viner">
        Välj bland vårt importsortiment av viner och lista dina favoriter för
        smidig beställning
      </DetailedLink>
      <DetailedLink to="/bestallningar" title="Beställningar">
        Så här går det till när du enkelt beställer hem dina viner genom
        Systembolaget
      </DetailedLink>
    </div>
  </div>
);

export default DetailedLinks;
