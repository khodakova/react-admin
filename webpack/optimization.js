export default {
    runtimeChunk: {
        name: 'runtime',    // создает рантайм файл, который будет использован
        // для всех сгенерированных фрагментов
    },
    /*
    используется для избежания дублирования зависимостей между модулями
     */
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'initial',
            },
        },
    },
};
