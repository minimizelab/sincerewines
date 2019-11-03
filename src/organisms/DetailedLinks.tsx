import React, { FunctionComponent } from 'react';
import Block from '../molecules/Block';
import Text from '../atoms/Text';
import ArrowRightGreen from '../atoms/ArrowRightGreen';

const DetailedLinks: FunctionComponent = () => (
  <div className="flex flex-row w-full items-end justify-between m-6 p-6 flex-wrap bg-white -mt-8 z-30">
    <div className="flex flex-row items-start lg:w-auto w-full flex-wrap">
      <Block center title="Arbetet på gården">
        <Text className="mb-3">
          Läs mer om hur våra producenter arbetar för att leverera viner av
          högsta kvalitet
        </Text>
        <ArrowRightGreen />
      </Block>
      <Block center title="Utvalda viner">
        <Text className="mb-3">
          Välj bland vårt importsortiment av viner och lista dina
          favoriter för smidig beställning
        </Text>
        <ArrowRightGreen />
      </Block>
      <Block center title="Beställ hem">
        <Text className="mb-3">
          Så här går det till när du enkelt beställer hem dina viner genom
          Systembolaget
        </Text>
        <ArrowRightGreen />
      </Block>
    </div>
  </div>
);

export default DetailedLinks;
