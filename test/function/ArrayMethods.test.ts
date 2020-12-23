import ArrayMethods from '../../src/function/ArrayMethods';
import { assert } from 'chai';

describe('ArrayMethods Test', () => {
    it('methods Test', () => {
        const a = new ArrayMethods();

        const arr = [];
        for (let i = 0; i < 10000; i++) {
            arr.push(i);
        }

        function basic() {
            for (let i = 0; i < 10000; i++) {
                if (arr[i] === 9999) return true;
            }
        }
        var selector = "f1"
        console.time(selector);
        basic();
        console.timeEnd(selector); 
        console.time(selector);
        a.binarySearch(arr, 1000);
        console.timeEnd(selector); 

    });
});