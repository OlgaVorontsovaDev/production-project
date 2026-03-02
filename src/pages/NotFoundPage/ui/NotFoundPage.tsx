import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { NotFoundPageProps } from './types';

import classes from './NotFoundPage.module.scss';

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(classes['not-found-page'], {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
