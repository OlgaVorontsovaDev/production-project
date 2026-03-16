import webpack from 'webpack';
import path from 'path';

import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    if (config.resolve) {
    /* eslint-disable no-param-reassign */
        config.resolve.modules = config.resolve.modules || [];
        config.resolve.modules.push(paths.src);

        config.resolve.extensions = config.resolve.extensions || [];
        config.resolve.extensions.push('.ts', '.tsx');
    }

    if (config.module && config.module.rules) {
    // Простое решение - используем any для обхода проверки типов
        config.module.rules = (config.module.rules as any[]).map((rule: any) => {
            if (
                rule
        && rule.test
        && rule.test.toString
        && rule.test.toString().includes('svg')
            ) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.module.rules.push(buildCssLoader(true));
    }

    return config;
};
