import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import Section from '../atoms/Section';
import H1 from '../atoms/H1';
import { useStaticQuery, graphql } from 'gatsby';
import H4 from '../atoms/H4';
import Text from '../atoms/Text';
import Link from '../atoms/Link';
import Img from 'gatsby-image';
import TextUppercase from '../atoms/TextUppercase';

interface Node {
  node: {
    childMarkdownRemark: {
      frontmatter: {
        short: string;
        slug: string;
        title: string;
        grapes: string;
        introImage: {
          childImageSharp: {
            fluid: any;
          };
        };
      };
    };
  };
}

interface Data {
  allFile: {
    edges: Node[];
  };
}

const Sortiment: FunctionComponent = () => {
  const data: Data = useStaticQuery(graphql`
    query producersQuery {
      allFile(filter: { sourceInstanceName: { eq: "producers" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                short
                slug
                title
                grapes
                introImage {
                  childImageSharp {
                    fluid(maxWidth: 720, maxHeight: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout title="Producenter">
      <Section className="flex-row justify-center p-8 mt-12 mb-6">
        <H1>Producenter</H1>
      </Section>
      <Section className="mb-6 flex-col items-center px-8">
        {data.allFile.edges.map(({ node }) => (
          <div
            key={node.childMarkdownRemark.frontmatter.slug}
            className="flex flex-row flex-wrap w-full bg-white my-10"
          >
            <div className="p-8 w-full lg:w-7/12 flex flex-col">
              <H4 className="mb-4">
                {node.childMarkdownRemark.frontmatter.title}
              </H4>
              <Text className="my-4">
                {node.childMarkdownRemark.frontmatter.short}
              </Text>
              <TextUppercase>Druvor</TextUppercase>
              <Text>{node.childMarkdownRemark.frontmatter.grapes}</Text>
              <Link
                className="uppercase self-end my-4"
                to={node.childMarkdownRemark.frontmatter.slug}
              >
                Läs mer om producenten
              </Link>
            </div>
            <div className="w-full lg:w-5/12 max-h-producer-intro">
              <Img
                className="h-full w-full"
                fluid={
                  node.childMarkdownRemark.frontmatter.introImage
                    .childImageSharp.fluid
                }
              ></Img>
            </div>
          </div>
        ))}
      </Section>
    </Layout>
  );
};

export default Sortiment;
