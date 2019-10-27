import React, { FunctionComponent } from 'react';
import H4 from '../atoms/H4';
import Text from '../atoms/Text';
import Button from '../molecules/Button';

const HeaderImage: FunctionComponent = () => (
  <div className="flex flex-col justify-center items-start">
    <div className="p-10">
      <H4 white className="text-white">
        A Swedish Premium Wine Importer
      </H4>
      <Text white className="py-4">
        Österrikiska premiumviner med naturlig karaktär och traditionell
        kvalitet
      </Text>
      <Button white onClick={() => console.log('click')}>
        Våra viner
      </Button>
    </div>
  </div>
);

export default HeaderImage;
