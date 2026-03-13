import { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
}
