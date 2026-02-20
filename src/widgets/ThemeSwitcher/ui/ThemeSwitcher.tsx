import { ButtonHTMLAttributes, FC } from 'react';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui/Button/Button';

import LightIcon from 'shared/assets/icons/light.svg';
import DarkIcon from 'shared/assets/icons/dark.svg';

import { ThemeButton } from 'shared/ui/Button/types';

import classes from './ThemeSwitcher.module.scss';

export const ThemeSwitcher: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
}) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(classes['theme-switcher'], {}, [
        className,
        classes[theme],
      ])}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
