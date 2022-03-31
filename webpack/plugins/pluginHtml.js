import {join} from 'path';

/**
 * Упрощает создание html для бандлов
 */
import HtmlWebpackPlugin from 'html-webpack-plugin';

import {rootDir} from '../utils/env';

const config = {
    filename: 'index.html', // рабочий html
    inject: true,   // внедрение всех ассетов по указанному пути шаблона
    template: join(rootDir, './public/index.html'), // путь до шаблона
};

export const htmlWebpackPlugin = new HtmlWebpackPlugin(config);
