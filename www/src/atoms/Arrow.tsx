import React, { FunctionComponent } from 'react';

interface Props {
  hover?: boolean;
  left?: boolean;
}

const ArrowGreen: FunctionComponent<Props> = ({ hover, left = false }) => {
  return left ? (
    <img
      alt=""
      className="w-12"
      src={
        hover ? '/assets/arrow-left-grape.svg' : '/assets/arrow-left-green.svg'
      }
    />
  ) : (
    <img
      alt=""
      className="w-12"
      src={
        hover
          ? '/assets/arrow-right-grape.svg'
          : '/assets/arrow-right-green.svg'
      }
    />
  );
};

export default ArrowGreen;
