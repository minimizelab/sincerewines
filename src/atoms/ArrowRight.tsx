import React, { FunctionComponent } from 'react';

const greenArrow = require('../assets/arrow-right-green.svg');
const redArrow = require('../assets/arrow-right-red.svg');
const grapeArrow = require('../assets/arrow-right-grape.svg');

interface Props {
  hover?: boolean;
}

const ArrowRightGreen: FunctionComponent<Props> = ({ hover }) => {
  return <img className="w-12" src={hover ? grapeArrow : greenArrow} />;
};

export default ArrowRightGreen;
