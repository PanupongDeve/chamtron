import { isObject } from './isObject'

export const stringToCamel: any = (string: any) => string.replace(/([-_]\w)/g, (g: any) => g[1].toUpperCase()) 


export const toCamel: any = (obj: any) => {
    if (isObject(obj)) {
        const n: any = {};
    
        Object.keys(obj)
          .forEach((k) => {
            n[stringToCamel(k)] = toCamel(obj[k]);
          });
    
        return n;
      } else if (Array.isArray(obj)) {
        return obj.map((i) => {
          return toCamel(i);
        });
      }
      
      return obj;
}

