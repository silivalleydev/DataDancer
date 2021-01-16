import { NumberMethods } from './function/NumberMethods';
import { StringMethods } from './function/StringMethods';
import { VisualMethods } from './function/VisualMethods';
import { DateMethods } from './function/DateMethods';
import { ArrayMethods } from './function/ArrayMethods';
export const arr = ArrayMethods;
export { DateMethods } from './function/DateMethods';
export { NumberMethods } from './function/NumberMethods';
export { StringMethods } from './function/StringMethods';
export { VisualMethods } from './function/VisualMethods';

export default class DataDancer {
    static NumberMethods = NumberMethods;
    static StringMethods = StringMethods;
    static VisualMethods = VisualMethods;
    static DateMethods = DateMethods;
    static ArrayMethods = ArrayMethods;
}