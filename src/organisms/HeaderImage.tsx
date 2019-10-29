import React, { FunctionComponent } from 'react';
import H4 from '../atoms/H4';
import Text from '../atoms/Text';
import Button from '../molecules/Button';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// const headerImg = require('../assets/headerimg.png');

const HeaderImage: FunctionComponent = () => (
  <div className="flex flex-col justify-end items-start">
    <StaticQuery
      query={graphql`
        query {
          file(
            relativePath: { eq: "headerimg.png" }
            sourceInstanceName: { eq: "images" }
          ) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img className="w-full" fluid={data.file.childImageSharp.fluid}></Img>
      )}
    />
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
