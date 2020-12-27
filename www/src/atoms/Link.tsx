import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import NextLink from 'next/link';
import { C } from '../types/types';
import { combineClasses } from '../utils/functions';

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
