import React from 'react';
import * as NextLink from 'next/link';
import { combineClasses } from '@minimizelab/mini_utils';
import { C } from '../types/types';

interface Props {
  defaultStyling?: boolean;
}

const Link: C<Props> = ({
  children,
  to,
  defaultStyling = true,
  activeClassName,
  className,
  ref,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to);
  const file = /\.[0-9a-z]+$/i.test(to);

  const combinedClassName = combineClasses([
    { 'font-sans text-base text-sincere-green': defaultStyling },
    className,
  ]);

  if (internal) {
    if (file) {
      return (
        <a className={combinedClassName} href={to} ref={ref} {...other}>
          {children}
        </a>
      );
    } else {
      return (
        <NextLink
          className={combinedClassName}
          to={to}
          activeClassName={activeClassName}
          {...other}
        >
          {children}
        </NextLink>
      );
    }
  } else {
    return (
      <NextLink
        className={combinedClassName}
        href={to}
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        {...other}
      >
        {children}
      </NextLink>
    );
  }
};
export default Link;
