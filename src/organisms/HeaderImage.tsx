import React, { FunctionComponent } from 'react';
import H4 from '../atoms/H4';
import Text from '../atoms/Text';
import Button from '../molecules/Button';

const headerImg = require('../assets/headerimg.png');

const HeaderImage: FunctionComponent = () => (
  <div className="flex flex-col justify-end items-start">
    <img className="w-screen relative" src={headerImg} />
    <div className="py-20 px-16 absolute">
      <H4 white className="text-white">
        A Swedish Premium Wine Importer
      </H4>
      <Text white className="pb-8 pt-2">
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
