import React, { Children } from 'react';
import Link, { LinkProps } from 'next/link';
import { get } from 'lodash';
import { useRouter } from 'next/router';

interface Props extends LinkProps {
  activeClassName?: string;
  children: JSX.Element | JSX.Element[];
}

const ActiveLink: React.FC<Props> = ({
  activeClassName = 'active',
  children,
  ...props
}) => {
  const child = Children.only(children);
  const router = useRouter();

  let className = get(child, 'props.className', '');

  const asPath = props.as || props.href;

  if (router.pathname === props.href && router.asPath === asPath) {
    className = `${className} ${activeClassName}`.trim();
  }

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

ActiveLink.defaultProps = {
  activeClassName: 'active',
};

export default ActiveLink;
