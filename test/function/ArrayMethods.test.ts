import ArrayMethods from '../../src/function/ArrayMethods';
import { assert } from 'chai';

describe('ArrayMethods Test', () => {
    it('methods Test', () => {
        const a = new ArrayMethods();

        const arr = [];
        for (let i = 0; i < 100000; i++) {
            arr.push(i);
        }

        function basic() {
            for (let i = 0; i < 100000; i++) {
                if (arr[i] === 9999) return true;
            }
        }
        console.time("basic");
        basic();
        console.timeEnd("basic"); 
        console.time("binary");
        a.binarySearch(arr, 9999);
        console.timeEnd("binary"); 

    });
});