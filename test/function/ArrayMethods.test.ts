import {ArrayMethods} from '../../src/function/ArrayMethods';
import {NumberMethods} from '../../src/function/NumberMethods';
import {StringMethods} from '../../src/function/StringMethods';
import { assert } from 'chai';

describe('ArrayMethods Test', () => {
    it('methods Test', () => {
        const a = new ArrayMethods();
        const n = new NumberMethods();
        const s = new StringMethods();

        const sample = [{id: 3, name: "Rick"}, {id:1, name:"Jack"}, {id:2, name:"Lee"}];
        let sorteds = a.quickSort(sample, "id");
        console.log('sorted=>', sorteds, 'rs=>',a.linearSearch(sorteds, "Jack", "name"))

        const ssarr = [ 3, 7,2,1,4, 10, 5];

        const sortedssar = a.quickSort(ssarr)
        console.log('결과',a.binarySearch(sortedssar, 5))

        const arr = [];

        for (let i = 0; i < 100000; i++) {
            arr.push(n.getRanRangeNum(0, 99999));
        }
        const originval = arr[arr.length - 1];
        function basic() {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === originval) return true;
            }
        }
        console.time("basic");
        basic();
        console.timeEnd("basic");
        
        const sorted = a.quickSort(arr)

        console.time("binary");
        const binaryrs = a.binarySearch(sorted, originval);
        console.timeEnd("binary"); 

        console.log('origin', originval)
        console.log('search', binaryrs)
        const strArr = [];
        let count = 10;


        function basicsearch(arre, target) {
            for (let i = 0; i < arr.length; i++) {
                if (arre[i] == target) return i;
                else return -1;
            }
        }
        while(count) {
            const name = s.nameGenerator("jp");
            const isExist = basicsearch(strArr, name);
            if (isExist === -1) {
                count -= 1;
                strArr.push(name)
            }
        }

        const searchrs = a.binarySearch(strArr, strArr[strArr.length-1]);
        console.log(strArr)
        console.log('원본값', strArr[strArr.length-1]);
        console.log('결과', searchrs)


        

        let arrsor = [];
        for (let i = 0; i < 1000; i++) {
            arrsor.push(n.getRanRangeNum(0,99));
        }

        console.time("sort");
        arrsor.sort((a,b)=>a-b);
        console.timeEnd("sort"); 

        let arr2 = [];
        for (let i = 0; i < 1000; i++) {
            arr2.push(n.getRanRangeNum(0,99));
        }

        console.time("quick sort");
        a.quickSort(arr2);
        console.timeEnd("quick sort"); 

        let arrObj = []

        for (let i = 0; i < 10000; i++) {
            arrObj.push({id: n.getRanRangeNum(0, 100), name: s.nameGenerator("kor")});
        }

        const originalobjval = arrObj[arrObj.length - 1];

        function objsearch() {
            for (let i = 0; i < arrObj.length; i++) {
                if (arrObj[i].name === originalobjval.name) return true;
            }
        }

        // const linear = a.linearSearch(arrObj, originalobjval.name, "name")
        // console.log('linear rs',linear)

        console.time("origin objsearch");
        const rs = objsearch();
        console.timeEnd("origin objsearch"); 

        console.log('origin obj search', rs);

        arrObj = a.quickSort(arrObj, "name"); 

        console.log(originalobjval.name)
        console.time("binary search obj");
        const binaryobjrs = a.binarySearch(arrObj, originalobjval.name, "name");
        console.timeEnd("binary search obj"); 

        console.log('binaryobjrs', binaryobjrs)
        
        let arrObj2 = []

        for (let i = 0; i < 10000; i++) {
            arrObj2.push({id: n.getRanRangeNum(0, 100), name: s.nameGenerator("kor")});
        }

        console.time("sort obj");
        arrObj2.sort((a:any, b:any)=> a.name - b.name);
        console.timeEnd("sort obj"); 

        const arr4 = [1,2,3,4,5,6,7];
        console.log('result',a.rmMiddleArrIdx(arr4, 1))
        const arr5 = [1,2,3,4,5,6,7];
        console.log('result',a.rmMiddleArrIdx(arr5, [3, 5, 6]))


        for (let i = 0; i < 10; i++) {
            console.log(a.getRanElement(arrObj2));
        }
        
        console.log(a.getRanElement(arrObj2, 5));
        console.log(a.getRanElement(arr4, 10));
    });
});