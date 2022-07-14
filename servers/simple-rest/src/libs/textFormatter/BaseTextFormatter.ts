import { generateShortId } from './shortId'
import {
    stringToCamel,
    toCamel
} from './toCamel'

import {
    stringToSnakeCase,
    toSnakeCase
} from './toSnake'

export default class BaseTextFormatter {

    generateShortId() {
        return generateShortId();
    }

    stringToCamel(string: string) {
        return stringToCamel(string);
    }

    toCamel(data: any) {
        return toCamel(data);
    }

    stringToSnakeCase(string: string) {
        return stringToSnakeCase(string);
    }

    toSnakeCase(data: any) {
        return toSnakeCase(data)
    }
}