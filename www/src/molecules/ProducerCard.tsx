import H4 from '../atoms/H4';
import Text from '../atoms/Text';
import TextUppercase from '../atoms/TextUppercase';
import ArrowLink from '../atoms/ArrowLink';
import Image from 'next/image';
import { createArrayString } from '../utils/functions';
import { C, Producer } from '../types/types';

interface Props {
  producer: Producer;
}

const ProducerCard: C<Props> = ({
  producer: { name, intro, grapes, path, image },
}) => (
  <div className="flex flex-row flex-wrap w-full rounded shadow bg-white my-4 md:my-6 ">
    <div className="p-8 w-full lg:w-7/12 flex flex-col">
      <H4 className="mb-4">{name}</H4>
      <Text className="my-4">{intro}</Text>
      <TextUppercase>Druvor</TextUppercase>
      <Text>{createArrayString(grapes.map((item) => item.name))}</Text>
      <div className="flex flex-row flex-grow items-end mt-2 justify-end">
        <ArrowLink to={`/producenter/${path}`}>
          Läs mer om producenten
        </ArrowLink>
      </div>
    </div>
    <div className="w-full lg:w-5/12 max-h-400 overflow-hidden relative h-270 lg:h-auto">
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={image.url}
      />
    </div>
  </div>
);

export default ProducerCard;
