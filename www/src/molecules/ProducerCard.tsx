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
      {content.map(({ node }) => (
        <div
          key={node.id}
          className="flex flex-row flex-wrap w-full rounded shadow bg-white my-4 md:my-6 "
        >
          <div className="p-8 w-full lg:w-7/12 flex flex-col">
            <H4 className="mb-4">{node.name}</H4>
            <Text className="my-4">{node.intro}</Text>
            <TextUppercase>Druvor</TextUppercase>
            <Text>
              {createArrayString(node.grapes.map((item) => item.name))}
            </Text>
            <div className="flex flex-row flex-grow items-end mt-2 justify-end">
              <ArrowLink to={`/producenter/${node.path.current}`}>
                Läs mer om producenten
              </ArrowLink>
            </div>
          </div>
          <div className="w-full lg:w-5/12 max-h-400">
            <Img
              className="h-full w-full"
              fluid={node.mainImg.asset.fluid}
            ></Img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ContentCard;
