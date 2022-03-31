import {babelLoader} from './useLoaderRuleItems';

/**
 * @see https://webpack.js.org/guides/typescript/#loader
 */
export const typescriptRule = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
        transpileOnly: true,
    },
    exclude: /node_modules/,
};
/**
 * @see https://webpack.js.org/loaders/babel-loader
 */
export const javascriptRule = {
    test: /\.(js|jsx)$/,
    use: [babelLoader],
    exclude: /node_modules/,
};

/**
 * Экспорт html в виде строки
 * https://webpack.js.org/loaders/html-loader
 */
export const htmlRule = {
    test: /\.(html)$/,
    use: {
        loader: 'html-loader',
    },
};
/**
 * Модуль ресурсов
 * Позволяет использовать файлы ресурсов без настройки дополнительных загрузчиков
 * https://webpack.js.org/guides/asset-modules/
 */
export const imagesRule = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource', // создает отдельный файл и экспортирует url. Замена file-loader
};

export const fontsRule = {
    test: /\.(woff(2)?|eot|ttf|otf|)$/,
    type: 'asset/inline',   // экспорт uri ассета. Замена url-loader
};

/**
 * Правило для возможности импорта по маске
 */
export const globRule = {
    test: /\.(s[ac]ss|js|ts)/,
    enforce: 'pre',
    loader: 'import-glob',
};
