import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import NextLink from 'next/link';
import { combineClasses } from '@minimizelab/mini_utils';
import { C } from '../types/types';

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
  ref,
  ...other
}) => {
  const combinedClassName = combineClasses([
    { 'font-sans text-base text-sincere-green': defaultStyling },
    className,
  ]);

  return (
    <NextLink href={to}>
      <a ref={ref} className={combinedClassName} {...other} />
    </NextLink>
  );
};

export default Link;
