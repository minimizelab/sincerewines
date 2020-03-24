import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Content from '@sanity/block-content-to-react';
import H4 from '../atoms/H4';
import { greetingSerializer } from '../utils/serializers';

interface Props {
  title: string;
  body: unknown;
}

const Greeting: FunctionComponent<Props> = ({ title, body }) => {
  const data: any = useStaticQuery(graphql`
    query {
      file(
        relativePath: { eq: "greeting.jpg" }
        sourceInstanceName: { eq: "images" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="flex flex-row flex-wrap justify-between rounded shadow bg-white mx-2 sm:mx-6 my-8 md:my-16">
      <div className="w-full md:w-2/3 p-10">
        <H4 className="mb-4">{title}</H4>
        <Content blocks={body} serializers={greetingSerializer} />
      </div>
      <div className="w-full md:w-1/3 max-h-800">
        <Img
          className="h-full w-full"
          fluid={data.file.childImageSharp.fluid}
        ></Img>
      </div>
    </div>
  );
};
export default Greeting;
