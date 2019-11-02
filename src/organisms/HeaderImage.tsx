import React, { FunctionComponent } from 'react';
import H4 from '../atoms/H4';
import Text from '../atoms/Text';
import Button from '../molecules/Button';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Section from '../atoms/Section';
import Quote from '../atoms/Quote';

const HeaderImage: FunctionComponent = () => (
  <div className="flex flex-col justify-end items-start relative">
    <StaticQuery
      query={graphql`
        query {
          file(
            relativePath: { eq: "headerimg.png" }
            sourceInstanceName: { eq: "images" }
          ) {
            childImageSharp {
              fluid(maxWidth: 2560) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img
          className="w-full min-h-half"
          fluid={data.file.childImageSharp.fluid}
        ></Img>
      )}
    />
    <Section className="top-0 w-full h-full absolute flex flex-row justify-start items-end">
      <div className="p-4 sm:p-6 mb-10 xl:mb-32">
        <H4 white className="text-white m-2">
          Sincere Wines
        </H4>
        <Quote white className="pb-8 pt-2 m-2">
          Viner från Österrike med fokus på kvalitet och ekologiskt tänk
        </Quote>
        <Button className="m-2" white onClick={() => console.log('click')}>
          Våra viner
        </Button>
      </div>
    </Section>
  </div>
);

export default HeaderImage;
