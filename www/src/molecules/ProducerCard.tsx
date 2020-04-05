import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';
import H4 from '../atoms/H4';
import Text from '../atoms/Text';
import TextUppercase from '../atoms/TextUppercase';
import ArrowLink from '../atoms/ArrowLink';

import { createArrayString } from '../utils/functions';
import { Producer } from '../types/types';

interface Props {
  content: Array<{ node: Producer }>;
}

const ContentCard: FunctionComponent<Props> = ({ content }) => {
  return (
    <div>
      {content
        // .sort(
        //   (a, b) =>
        //     a.node.childMarkdownRemark.frontmatter.order -
        //     b.node.childMarkdownRemark.frontmatter.order
        // )
        .map(({ node: producer }) => (
          <div
            key={producer.id}
            className="flex flex-row flex-wrap w-full rounded shadow bg-white my-4 md:my-6 "
          >
            <div className="p-8 w-full lg:w-7/12 flex flex-col">
              <H4 className="mb-4">{producer.name}</H4>
              <Text className="my-4">{producer.intro}</Text>
              <TextUppercase>Druvor</TextUppercase>
              <Text>
                {createArrayString(producer.grapes.map((item) => item.name))}
              </Text>
              <div className="flex flex-row flex-grow items-end mt-2 justify-end">
                <ArrowLink to={`/producenter/${producer.path.current}`}>
                  Läs mer om producenten
                </ArrowLink>
              </div>
            </div>
            <div className="w-full lg:w-5/12 max-h-400">
              <Img
                className="h-full w-full"
                fluid={producer.mainImg.asset.fluid}
              ></Img>
            </div>
          </div>
        ))}
    </div>
  );
};
export default ContentCard;
