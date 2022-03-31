import {join} from 'path';

/**
 * Запуск проверки типов ts в отдельном процессе, что ускоряет сборку и время,
 * необходимое для компляции
 */
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import {isDev, rootDir} from '../utils/env';

const config = {
    async: isDev,   //если true, сообщает о проблемах после завершения компиляции
    typescript: {
        configFile: join(rootDir, '/tsconfig.json'),
    },
    eslint: {enabled: true, files: '../src/**/*.{ts,tsx,js,jsx}'},
};

export const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin(
    config,
);
