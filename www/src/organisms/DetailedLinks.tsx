import React, { FunctionComponent } from 'react';
import DetailedLink from '../molecules/DetailedLink';

export interface ActionLink {
  title: string;
  subTitle: string;
  link: string;
}

interface Props {
  links: ActionLink[];
}

const DetailedLinks: FunctionComponent<Props> = ({ links }) => (
  <div className="flex flex-row w-full items-end justify-between m-6 p-6 flex-wrap bg-white rounded shadow -mt-8 z-30">
    <div className="flex flex-row items-start lg:w-auto w-full flex-wrap">
      {links.map(({ link, title, subTitle }) => (
        <DetailedLink key={title} to={link} title={title}>
          {subTitle}
        </DetailedLink>
      ))}
    </div>
  </div>
);

export default DetailedLinks;
