import React, { FunctionComponent } from 'react';
import Text from '../atoms/Text';
import Button from '../molecules/Button';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Section from '../atoms/Section';
import Quote from '../atoms/Quote';

const QuoteImage: FunctionComponent = () => (
  <div className="flex flex-col justify-end items-start relative">
    <StaticQuery
      query={graphql`
        query {
          file(
            relativePath: { eq: "quoteimage.png" }
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
      <div className="p-4 sm:p-6 mb-10 sm:mb-20 xl:mb-24">
        <Quote white className="pb-8 pt-2 m-2 w-2/3 xl:w-2/5">
          Vår vision är att representera våra producenter och deras viner med
          samma höga ambition och innerlighet som producenterna själva
        </Quote>
        <Button className="m-2" white onClick={() => console.log('click')}>
          Våra producenter
        </Button>
      </div>
    </Section>
  </div>
);

export default QuoteImage;
