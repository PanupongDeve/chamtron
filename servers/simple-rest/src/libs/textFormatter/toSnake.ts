import { isObject } from './isObject';

export const stringToSnakeCase: any = (string: any) => string.replace(/[A-Z]/g, (letter: any) => `_${letter.toLowerCase()}`);

export const toSnakeCase: any = (obj: any) => {
    if (isObject(obj)) {
        const n: any = {};
    
        Object.keys(obj)
          .forEach((k) => {
            n[stringToSnakeCase(k)] = toSnakeCase(obj[k]);
          });
    
        return n;
      } else if (Array.isArray(obj)) {
        return obj.map((i) => {
          return toSnakeCase(i);
        });
      }
      
      return obj;
}

