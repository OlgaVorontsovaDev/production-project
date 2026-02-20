import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { ButtonProps } from './types';

import classes from './Button.module.scss';

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(classes.button, {}, [className, classes[theme]])}
      {...otherProps}
    />
  );
};
