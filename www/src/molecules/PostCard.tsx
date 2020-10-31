import H4 from '../atoms/H4';
import Text from '../atoms/Text';
import TextUppercase from '../atoms/TextUppercase';
import ArrowLink from '../atoms/ArrowLink';
import { Post, C } from '../types/types';

interface Props {
  content: Array<Post>;
}

const PostCard: C<Props> = ({ content }) => (
  <div>
    {content.map(({ _id, title, intro, date, path, image }) => (
      <div
        key={_id}
        className="flex flex-row flex-wrap w-full rounded shadow bg-white my-4 md:my-6 "
      >
        <div className="p-8 w-full lg:w-7/12 flex flex-col">
          <H4 className="mb-4">{title}</H4>
          <Text className="my-4">{intro}</Text>
          <TextUppercase>Publicerades</TextUppercase>
          <Text>{date}</Text>
          <div className="flex flex-row flex-grow items-end mt-2 justify-end">
            <ArrowLink to={`/posts/${path.current}`}>Läs mer</ArrowLink>
          </div>
        </div>
        <div className="w-full lg:w-5/12 max-h-400">
          <img
            className="h-full w-full object-cover object-center"
            src={image}
          />
        </div>
      </div>
    ))}
  </div>
);

export default PostCard;
