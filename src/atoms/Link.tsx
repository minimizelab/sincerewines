import React, { FunctionComponent } from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import { combineClasses } from '../utils/helpers';

const Link: FunctionComponent<GatsbyLinkProps<{}>> = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  className,
  ref,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to);
  const file = /\.[0-9a-z]+$/i.test(to);

  const combinedClassName = combineClasses([
    'font-sans text-base text-sincere-green',
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
        <GatsbyLink
          className={combinedClassName}
          to={to}
          activeClassName={activeClassName}
          {...other}
        >
          {children}
        </GatsbyLink>
      );
    }
  } else {
    return (
      <a className={combinedClassName} href={to} ref={ref} {...other}>
        {children}
      </a>
    );
  }
};
export default Link;
