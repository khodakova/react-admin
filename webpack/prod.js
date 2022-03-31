/**
 * Использует terser для минификации js
 * terser - тулкит для обработки и компрессии js es6+
 */
import TerserJSPlugin from 'terser-webpack-plugin';

import * as plugins from './plugins';

export default {
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({})],
    },
    plugins: [plugins.cleanWebpackPlugin, plugins.miniCssExtractPlugin],
    /*
    performance разрешает контролировать то, как вебпак сообщает разработчику
    о ресурсах и точках входа, которые превышают некие лимиты
     */
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
