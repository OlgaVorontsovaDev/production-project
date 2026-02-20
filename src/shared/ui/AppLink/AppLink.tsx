import { FC } from 'react';
import { Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import { AppLinkProps, AppLinkTheme } from './types';

import classes from './AppLink.module.scss';

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(classes.applink, {}, [className, classes[theme]])}
      {...otherProps}>
      {children}
    </Link>
  );
};
