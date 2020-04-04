import React, { FunctionComponent } from 'react';

import greenArrow from '../assets/arrow-right-green.svg';
import grapeArrow from '../assets/arrow-right-grape.svg';

interface Props {
  hover?: boolean;
}

const ArrowRightGreen: FunctionComponent<Props> = ({ hover }) => {
  return <img className="w-12" src={hover ? grapeArrow : greenArrow} />;
};

export default ArrowRightGreen;
