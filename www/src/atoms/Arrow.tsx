import React, { FunctionComponent } from 'react';

import greenRightArrow from '../assets/arrow-right-green.svg';
import grapeRightArrow from '../assets/arrow-right-grape.svg';
import grapeLeftArrow from '../assets/arrow-left-grape.svg';
import greenLeftArrow from '../assets/arrow-left-green.svg';

interface Props {
  hover?: boolean;
  left?: boolean;
}

const ArrowGreen: FunctionComponent<Props> = ({ hover, left = false }) => {
  return left ? (
    <img className="w-12" src={hover ? grapeLeftArrow : greenLeftArrow} />
  ) : (
    <img className="w-12" src={hover ? grapeRightArrow : greenRightArrow} />
  );
};

export default ArrowGreen;
