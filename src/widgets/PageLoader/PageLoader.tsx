import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { PageLoaderProps } from './types';

import classes from './PageLoader.module.scss';

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(classes['page-loader'], {}, [className])}>
        <Loader />
    </div>
);
