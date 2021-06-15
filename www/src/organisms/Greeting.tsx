import Content from '@sanity/block-content-to-react';
import H4 from '../atoms/H4';
import { greetingSerializer } from '../utils/serializers';
import { C } from '../types/types';
import Image from 'next/image';
import GreetingImageSrc from '../assets/images/greeting.jpg';

interface Props {
  title: string;
  body: unknown;
}

const Greeting: C<Props> = ({ title, body }) => (
  <div className="flex flex-row flex-wrap justify-between rounded shadow bg-white mx-2 sm:mx-6 my-8 md:my-16">
    <div className="w-full md:w-2/3 p-10">
      <H4 className="mb-4">{title}</H4>
      <Content blocks={body} serializers={greetingSerializer} />
    </div>
    <div className="w-full md:w-1/3 min-h-400 max-h-800 relative">
      <Image
        placeholder="blur"
        sizes="(min-width: 0px) 500px"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={GreetingImageSrc}
      />
    </div>
  </div>
);

export default Greeting;
