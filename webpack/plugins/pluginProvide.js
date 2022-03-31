/**
 * Автоматическая загрузка модулей вместо использования import или require
 */
import {ProvidePlugin} from 'webpack';

const config = {};

export const providePlugin = new ProvidePlugin(config);
