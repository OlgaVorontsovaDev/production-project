import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { NavbarProps } from './types';
import { AppLinkTheme } from 'shared/ui/AppLink/types';

import classes from './Navbar.module.scss';

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classes.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to='/'
          className={classes['main-link']}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
