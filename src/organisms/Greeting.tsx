import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import H4 from '../atoms/H4';
import TextLarge from '../atoms/TextLarge';
import ArrowLink from '../atoms/ArrowLink';

const Greeting: FunctionComponent = () => {
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
    <div className="flex flex-row flex-wrap justify-between bg-white sm:mx-6 my-20">
      <div className="w-full md:w-2/3 p-10">
        <H4 className="mb-3">Välkomna till Sincere Wines!</H4>
        <TextLarge className="py-5">
          Vi har valt att fokusera på det fantastiska vinlandet Österrike för
          att vi älskar dessa viner.
        </TextLarge>
        <TextLarge>
          Våra utvalda producenter har en gemensam filosofi där kvalitet,
          tradition och bevarande av druvornas och markernas naturliga karaktär
          är det centrala i allt arbete på vingården.
        </TextLarge>
        <TextLarge className="py-5">
          Vår målsättning är att representera våra producenter och deras viner
          på ett sätt som motsvarar deras ambitionsnivå och innerlighet. Vi vill
          också gärna bidra till att väcka en större nyfikenhet om Österrike som
          vinland och öka kunskapen om österrikiska viner i Sverige.
        </TextLarge>
        <TextLarge>Vill du veta mer?</TextLarge>
        <ArrowLink to="/nyheter">skriv upp dig på vårt nyhetsbrev</ArrowLink>
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
