import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import NextLink from 'next/link';
import { C } from '../types/types';
import { combineClasses } from '../utils/functions';
import { useRouter } from 'next/router';

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  defaultStyling?: boolean;
  to: string;
  activeClassName?: string;
}

const Link: C<Props> = ({
  to,
  defaultStyling = true,
  activeClassName,
  className,
  ...other
}) => {
  const { asPath } = useRouter();
  const active = asPath === to;
  const combinedClassName = combineClasses([
    { 'font-sans text-base text-sincere-green': defaultStyling },
    className,
    { [activeClassName]: active },
  ]);

  return (
    <NextLink passHref href={to}>
      <a className={combinedClassName} {...other} />
    </NextLink>
  );
};

export default Link;
