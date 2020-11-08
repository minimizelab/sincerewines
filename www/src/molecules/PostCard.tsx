import H4 from '../atoms/H4';
import Text from '../atoms/Text';
import TextUppercase from '../atoms/TextUppercase';
import ArrowLink from '../atoms/ArrowLink';
import { Post, C } from '../types/types';
import Image from 'next/image';

interface Props {
  post: Post;
}

const PostCard: C<Props> = ({ post: { title, intro, date, slug, image } }) => (
  <div className="flex flex-row flex-wrap w-full rounded shadow bg-white my-4 md:my-6 ">
    <div className="p-8 w-full lg:w-7/12 flex flex-col">
      <H4 className="mb-4">{title}</H4>
      <Text className="my-4">{intro}</Text>
      <TextUppercase>Publicerades</TextUppercase>
      <Text>{date}</Text>
      <div className="flex flex-row flex-grow items-end mt-2 justify-end">
        <ArrowLink to={`/nyheter/${slug}`}>Läs mer</ArrowLink>
      </div>
    </div>
    <div className="w-full lg:w-5/12 max-h-400 overflow-hidden relative h-270 lg:h-auto">
      <Image
        layout="fill"
        className="h-full w-full object-cover object-center"
        src={image.url}
      />
    </div>
  </div>
);

export default PostCard;
