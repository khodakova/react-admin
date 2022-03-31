import {join} from 'path';

/**
 * Копирование уже существующих файлов и директорий (ассеты, документы и т.д)
 * в директорию билда
 */
import CopyPlugin from 'copy-webpack-plugin';

import {rootDir} from '../utils/env';

const config = {
    patterns: [{from: join(rootDir, './src/assets'), to: 'assets'}],
};

export const copyPlugin = new CopyPlugin(config);
