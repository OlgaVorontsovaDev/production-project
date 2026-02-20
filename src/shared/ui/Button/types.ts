import { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
	CLEAR = 'clear'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
}
