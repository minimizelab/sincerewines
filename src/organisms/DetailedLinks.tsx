import React, { FunctionComponent } from 'react';
import Block from '../molecules/Block';
import Text from '../atoms/Text';

const DetailedLinks: FunctionComponent = () => (
  <div className="flex flex-row w-full items-end justify-between m-6 p-6 flex-wrap bg-white -mt-8 z-30">
    <div className="flex flex-row items-start lg:w-auto w-full flex-wrap">
      <Block center title="Utforska">
        <Text>
          Läs mer om hur våra producenter arbetar för att leverera viner av
          högsta kvalitet
        </Text>
      </Block>
      <Block center title="Lista">
        <Text>
          Välj dina favoriter från vårt importsortiment av premiumviner
        </Text>
      </Block>
      <Block center title="Beställ">
        <Text>
          Så här går det till när du enkelt beställer hem dina viner genom
          Systembolaget
        </Text>
      </Block>
    </div>
  </div>
);

export default DetailedLinks;
