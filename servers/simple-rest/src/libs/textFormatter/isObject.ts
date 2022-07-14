export const isObject = function (obj: any) {
    return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';
};