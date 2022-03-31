import {babelLoader} from './useLoaderRuleItems';

/**
 * Позволяет использовать svg в react компонентах
 * https://react-svgr.com/docs/webpack/
 */
export const svgReactComponentRule = {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: /\.[jt]sx$/,
    use: [
        babelLoader,
        {
            loader: '@svgr/webpack',
            options: {
                babel: false,
                icon: true,
            },
        },
    ],
};

/**
 * Модуль ресурсов
 * Позволяет использовать файлы ресурсов без настройки дополнительных загрузчиков
 * https://webpack.js.org/guides/asset-modules/
 */
export const svgRule = {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: {not: [/\.[jt]sx$/]},
    type: 'asset/inline',
};

export const svgRules = [svgReactComponentRule, svgRule];
