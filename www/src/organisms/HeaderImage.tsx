import React, { FunctionComponent } from 'react';
import H4 from '../atoms/H4';
import Button from '../molecules/Button';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Section from '../atoms/Section';
import TextLarge from '../atoms/TextLarge';
import { Link } from '../types/types';

interface Props {
  title: string;
  subTitle: string;
  link: Link;
}

const HeaderImage: FunctionComponent<Props> = ({ title, subTitle, link }) => {
  const data = useStaticQuery(graphql`
    query {
      file(
        relativePath: { eq: "headerimg.png" }
        sourceInstanceName: { eq: "images" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="flex flex-col justify-end items-start relative">
      <Img
        className="w-full min-h-half"
        fluid={data.file.childImageSharp.fluid}
      ></Img>
      <Section className="top-0 w-full h-full absolute flex flex-row justify-start items-end">
        <div className="p-6 mb-10 xl:mb-32">
          <H4 white className="text-white ">
            {title}
          </H4>
          <TextLarge white className="pb-8 pt-2">
            {subTitle}
          </TextLarge>
          <Button
            white
            onClick={(): void => {
              navigate(link.link);
            }}
          >
            {link.title}
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default HeaderImage;
