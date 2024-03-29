import Button from '../molecules/Button';
import Section from '../atoms/Section';
import Quote from '../atoms/Quote';
import { Link, C } from '../types/types';
import { useRouter } from 'next/router';
import Image from 'next/image';
import useTrackEvent from '../hooks/useTrackEvent';
import QuoteImageSrc from '../assets/images/quoteimage.png';

interface Props {
  text: string;
  link: Link;
}

const QuoteImage: C<Props> = ({ text, link }) => {
  const router = useRouter();
  const trackEvent = useTrackEvent();
  return (
    <div className="flex flex-col h-half min-h-400 justify-end items-start relative">
      <Image
        priority
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={QuoteImageSrc}
      />
      <Section className="top-0 w-full h-full absolute flex flex-row justify-start items-end">
        <div className="p-4 sm:p-6 mb-10 sm:mb-20 xl:mb-24">
          <Quote white className="pb-8 pt-2 m-2 w-2/3 xl:w-2/5">
            {text}
          </Quote>
          <Button
            className="m-2"
            white
            onClick={(): void => {
              trackEvent('Quote section call to action');
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

export default QuoteImage;
