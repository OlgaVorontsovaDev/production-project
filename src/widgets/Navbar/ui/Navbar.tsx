import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import { AppLinkTheme } from 'shared/ui/AppLink/types';
import { NavbarProps } from './types';

import classes from './Navbar.module.scss';

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <div className={classes.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={classes['main-link']}
                >
                    {t('Главная страница')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
