import React, { FunctionComponent } from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

const Link: FunctionComponent<GatsbyLinkProps<{}>> = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ref,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to);
  const file = /\.[0-9a-z]+$/i.test(to);

  if (internal) {
    if (file) {
      return (
        <a href={to} ref={ref} {...other}>
          {children}
        </a>
      );
    } else {
      return (
        <GatsbyLink to={to} activeClassName={activeClassName} {...other}>
          {children}
        </GatsbyLink>
      );
    }
  } else {
    return (
      <a href={to} ref={ref} {...other}>
        {children}
      </a>
    );
  }
};
export default Link;
