import React, { Children } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, ...props }) => {
  const child = Children.only(children);
  const router = useRouter();

  let className = child.props.className || '';

  const asPath = props.as || props.href;

  if (
    router.pathname === props.href &&
    router.asPath === asPath &&
    props.activeClassName
  ) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

ActiveLink.defaultProps = {
  activeClassName: 'active',
};

export default ActiveLink;
