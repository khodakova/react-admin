/**
 * Замена переменных в коде значениями, указанными здесь, во время компиляции
 * Эти значения будут встроены в код, позволяя его минифицировать, т.к. не будут
 * использованы избыточные условные выражения
 */
import {DefinePlugin} from 'webpack';

import {isDev, isDevServer, isProd, mode} from '../utils/env';

const config = {
    'process.env': {
        NODE_ENV: JSON.stringify(mode),
    },
    IS_PROD: isProd,
    IS_DEV: isDev,
    IS_DEV_SERVER: isDevServer,
};

export const definePlugin = new DefinePlugin(config);
