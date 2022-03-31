import { getToken} from '@src/helpers/localStorage';
import { isEqual } from 'lodash';

/*
Глубокое сравнение двух объектов
 */
export const compareTwoObject = (
    object1: object = {},
    object2: object = {},
): boolean => {
    return isEqual(object1, object2);
};

/*
Проверка объекта на пустоту
 */
export const isEmptyObject = (object: object): boolean => {
    return (
        !object ||
        (Object.keys(object).length === 0 && object.constructor === Object)
    );
};

/*
Проверка на объект
 */
export const isObject = (obj: object): boolean =>
    obj && typeof obj === 'object' && !Array.isArray(obj);

/*
Гарантированное возвращение массива
 */
export const ensureArray = (data: unknown): Array<any> =>
    Array.isArray(data) ? data : [];

/*
Гарантированное возвращение объекта
 */
// export const ensureObject = (obj: object, defaultValue: object): Object =>
//     isObject(obj) ? obj : isObject(defaultValue) ? defaultValue : {};

export const parseBoolean = (val: unknown): boolean =>
    !val ||
    val === 'false' ||
    val === 'null' ||
    val === 'undefined' ||
    val === '0'
        ? false
        : true;

/*
Валидация e-mail
 */
export const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

export const DATE_FORMAT = 'MM.DD.YYYY';

export const TIME_FORMAT = 'hh:mm:ss';

export const DATE_TIME_FORMAT = `${ DATE_FORMAT } ${ TIME_FORMAT }`;

/*
Задержка для действия
 */
export const sleep = (ms: number): Promise<unknown> =>
    new Promise(resolve => setTimeout(resolve, ms));

export const isPromise = (func: Promise<unknown>): boolean =>
    func && typeof func.then === 'function';

/*
Установка заголовков для запроса
 */
export const getHeaders = (options: object = {}): object =>
    Object.assign(
        {},
        {
            Authorization: `Bearer ${ getToken() }`,
            'Content-Type': 'application/json',
        },
        options,
    );

/*
Проверка исполняемости кода в браузере
 */
export const isBrowser = typeof window !== 'undefined';

/*
Скролл до объекта
 */
// export const scrollTo = (element: HTMLElement, rest: unknown): void => {
//     // const isIE = detectIE()
//     const supportsNativeSmoothScroll =
//         'scrollBehavior' in document.documentElement.style;
//
//     if (!supportsNativeSmoothScroll) {
//         // const [x, y] = rest;
//         // const offsetTop = x?.top || x || 0;
//         // const offsetLeft = x?.left || y || 0;
//         // element.scrollTop = offsetTop;
//         // element.scrollLeft = offsetLeft;
//     } else {
//         element.scrollTo(rest);
//     }
// };
