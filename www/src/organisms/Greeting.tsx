import Content from '@sanity/block-content-to-react';
import H4 from '../atoms/H4';
import { greetingSerializer } from '../utils/serializers';
import { C } from '../types/types';

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
    <div className="w-full md:w-1/3 max-h-800">
      <img
        className="h-full w-full object-cover center"
        src="/images/greeting.jpg"
      />
    </div>
  </div>
);

export default Greeting;
