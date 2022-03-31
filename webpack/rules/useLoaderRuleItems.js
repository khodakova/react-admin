import {join} from 'path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {sassResourceItems} from '../config';
import {isProd, rootDir, webpackDir} from '../utils/env';

export const cssLoader = {
    loader: 'css-loader',
};

export const sassLoaderItems = [
    {
        /**
         * Загружает scss/sass файлы и компилирует их в css
         */
        loader: 'sass-loader',
        options: {
            sourceMap: true,
            implementation: require('sass'),
        },
    },
    /**
     * Загрузка sass ресурсов в каждый необходимый модуль. Таким образом можно
     * будет использовать общие переменные, миксины и функции во всех sass файлах,
     * не загружая их вручную
     */
    sassResourceItems.length
        ? {
              loader: 'sass-resources-loader',
              options: {
                  resources: sassResourceItems,
              },
          }
        : null,
];

/***
 * MiniCssExtractPlugin извлекает css в отдельные файлы
 * style-loader внедряет css в DOM
 * https://webpack.js.org/plugins/mini-css-extract-plugin/#root
 * https://webpack.js.org/loaders/style-loader/#root
 */
export const miniCssExtractLoader =
    isProd
    ? {
          loader: MiniCssExtractPlugin.loader,
          options: {
              esModule: false,
          },
      }
    : {
          loader: 'style-loader',
          options: {
              esModule: false,
          },
      };

/**
 * Разрешает использование относительных путей в url
 * https://webpack.js.org/loaders/sass-loader/#problems-with-url
 * https://www.npmjs.com/package/resolve-url-loader
 */
export const resolveUrlLoader = {
    loader: 'resolve-url-loader',
    options: {
        sourceMap: true,
    },
};

/**
 * Возможность транспиляции js
 */
export const babelLoader = {
    loader: 'babel-loader',
    options: {
        configFile: join(rootDir, '/.babelrc.js'),
    },
};

export const cssModulesSupportLoaderItems = [
    miniCssExtractLoader,
    {
        ...cssLoader,
        options: {
            esModule: false,
            modules: {
                exportLocalsConvention: 'camelCaseOnly',    // names of locals
                localIdentName: '[local]__[contenthash:base64:5]',  // дает
                // настраивать локальное имя идентификатора
            },
        },
    },
];

export const cssLoaderItems = [miniCssExtractLoader, cssLoader];
