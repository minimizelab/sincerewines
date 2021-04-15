import H4 from '../atoms/H4';
import Button from '../molecules/Button';
import Section from '../atoms/Section';
import TextLarge from '../atoms/TextLarge';
import { C, Link } from '../types/types';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import useTrackEvent from '../hooks/useTrackEvent';

interface Props {
  title: string;
  subTitle: string;
  link: Link;
}

const HeaderImage: C<Props> = ({ title, subTitle, link }) => {
  const router = useRouter();
  const trackEvent = useTrackEvent();
  return (
    <div className="flex flex-col h-half min-h-400 xl:h-3/4 justify-end items-start relative">
      <Image
        priority
        layout="fill"
        objectFit="cover"
        objectPosition="center"
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
              trackEvent('Header call to action');
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
