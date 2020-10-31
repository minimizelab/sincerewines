import H4 from '../atoms/H4';
import Button from '../molecules/Button';
import Section from '../atoms/Section';
import TextLarge from '../atoms/TextLarge';
import { C, Link } from '../types/types';
import { useRouter } from 'next/dist/client/router';

interface Props {
  title: string;
  subTitle: string;
  link: Link;
}

const HeaderImage: C<Props> = ({ title, subTitle, link }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-end items-start relative">
      <img
        className="w-full min-h-half object-cover object-center"
        src="/images/headerimg.png"
      />
      <Section className="top-0 w-full h-full absolute flex flex-row justify-start items-end">
        <div className="p-6 mb-10 xl:mb-32">
          <H4 white className="text-white ">
            {title}
          </H4>
          <TextLarge white className="pb-8 pt-2">
            {subTitle}
          </TextLarge>
          <Button
            white
            onClick={(): void => {
              router.push(link.link);
            }}
          >
            {link.title}
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default HeaderImage;
