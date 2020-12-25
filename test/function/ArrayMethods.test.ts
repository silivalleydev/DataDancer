import ArrayMethods from '../../src/function/ArrayMethods';
import NumberMethods from '../../src/function/NumberMethods';
import StringMethods from '../../src/function/StringMethods';
import { assert } from 'chai';

describe('ArrayMethods Test', () => {
    it('methods Test', () => {
        const a = new ArrayMethods();
        const n = new NumberMethods();
        const s = new StringMethods();

        const arr = [];
        for (let i = 0; i < 100000; i++) {
            arr.push(n.getRanRangeNum(0, 99999));
        }

        function basic() {
            const sort = a.quickSort(arr);
            for (let i = 0; i < 100000; i++) {
                if (sort[i] === sort[sort.length-1]) return true;
            }
        }
        console.time("basic");
        basic();
        console.timeEnd("basic"); 

        console.time("binary");
        a.binarySearch(arr, arr.length-1);
        console.timeEnd("binary"); 

        
        let arrsor = [];
        for (let i = 0; i < 100; i++) {
            arrsor.push(n.getRanRangeNum(0,99));
        }

        console.time("sort");
        arrsor.sort((a,b)=>a-b);
        console.timeEnd("sort"); 

        let arr2 = [];
        for (let i = 0; i < 100; i++) {
            arr2.push(n.getRanRangeNum(0,99));
        }

        console.time("quick sort");
        arr2 = a.quickSort(arr2);
        console.timeEnd("quick sort"); 

        
        let radix = [];
        for (let i = 0; i < 100; i++) {
            radix.push(n.getRanDigitNum(3));
        }

        console.time("radix sort");
        radix = a.radixSort(radix);
        console.timeEnd("radix sort"); 

        let arrObj = []

        for (let i = 0; i < 100; i++) {
            arrObj.push({id: n.getRanRangeNum(0, 100), name: s.nameGenerator("kor")});
        }

        console.time("quick sort obj");
        arrObj = a.quickSort(arrObj, "name");
        console.timeEnd("quick sort obj"); 

        
        let arrObj2 = []

        for (let i = 0; i < 100; i++) {
            arrObj2.push({id: n.getRanRangeNum(0, 100), name: s.nameGenerator("kor")});
        }

        console.time("sort obj");
        arrObj2.sort((a:any, b:any)=> a.name - b.name);
        console.timeEnd("sort obj"); 
        
        let arr3 = [];
        for (let i = 0; i < 100; i++) {
            arr3.push(n.getRanRangeNum(0,99));
        }
        
        console.time("merge sort");
        arr3 = a.mergeSort(arr3);
        console.timeEnd("merge sort"); 

        const arr4 = [1,2,3,4,5,6,7];
        console.log('result',a.rmMiddleArrIdx(arr4, 1))
        const arr5 = [1,2,3,4,5,6,7];
        console.log('result',a.rmMiddleArrIdx(arr5, [3, 5]))
    });
});