module.exports = (api) => {
    const mode = process.env.NODE_ENV ?? 'production';

    // кэширует конфиг babel
    api.cache.using(() => mode);

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
                    },
                    useBuiltIns: 'usage',
                    debug: false,
                    corejs: 3,
                },
            ],
            '@babel/preset-react',
        ],
        plugins: [
            // разрешает использовать import()
            '@babel/plugin-syntax-dynamic-import',
            // преобразует свойства статических классов
            '@babel/plugin-proposal-class-properties',
            /*
                 компилирует экспорт пространства имен es2015
                 example:    export * as ns from "mod";
             */
            '@babel/plugin-proposal-export-namespace-from',
            // позволяет использовать throw expressions (errors)
            '@babel/plugin-proposal-throw-expressions',
            // позволяет использовать spread и rest операторы
            '@babel/proposal-object-rest-spread',
            // подключаем react-refresh/babel только не в production режиме
            mode !== 'production' && 'react-refresh/babel',
        ].filter(Boolean),
    };
};
