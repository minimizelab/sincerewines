import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import NextLink from 'next/link';
import { C } from '../types/types';
import { useRouter } from 'next/router';
import classNames from 'classnames';

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
  const combinedClassName = classNames([
    { 'font-sans text-base text-sincere-green': defaultStyling },
    className,
    active ?? activeClassName,
  ]);

  return (
    <NextLink passHref href={to}>
      <a className={combinedClassName} {...other} />
    </NextLink>
  );
};

export default Link;
