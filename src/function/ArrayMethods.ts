import Base from '../common/Base';

export default class ArrayMethods extends Base {

    /** 
     * fields
     */

    /**
     * properties
     */

    /**
     *  constructor
     */
    constructor() {
        super();
    }

    /**
     * methods
     */

    /**
     * 기수 정렬
     */
    radixSort(nums) {
        let maxDigits = this.$_mostDigits(nums);
        for (let k = 0; k < maxDigits; k++) {
            let buckets = Array.from({length: 10}, () => []);
            for (let num of nums) {
                let digit = this.$_getDigit(num, k);
                buckets[digit].push(num);
            }
            nums = [].concat(...buckets);
        }
        return nums;
    }

    /**
     * quick sort
     * 
     * 
     */
    quickSort(arr: any[], key?: string) {
        if (arr.length <= 1) {
            return arr;
        } else {
            let left = [];
            let right = [];
            let newArray = [];
            let pivot = arr.pop();
            let length = arr.length;
    

        if (key) {
            for (let i = 0; i < length; i++) {
                if (arr[i][key] <= pivot[key]) {
                    left.push(arr[i]);
                } else {
                    right.push(arr[i]);
                }
            }
            return newArray.concat(this.quickSort(left, key), pivot, this.quickSort(right, key));
        } else {
            for (let i = 0; i < length; i++) {
                if (arr[i] <= pivot) {
                    left.push(arr[i]);
                } else {
                    right.push(arr[i]);
                }
            }
            return newArray.concat(this.quickSort(left), pivot, this.quickSort(right));
        }
    
        }
    }

    /**
     * mergeSort
     */
    mergeSort(array: any[]) {
        if (array.length === 1) {
            return array
        }
          // Split Array in into right and left
        const length = array.length;
        const middle = Math.floor(length / 2)
        const left = array.slice(0, middle) 
        const right = array.slice(middle)
        
        
        return this.$_merge(
            this.mergeSort(left),
            this.mergeSort(right)
        )
    };

    

    /**
     * 이진 탐색 알고리즘
     * 
     * (arr: 배열, search: 찾을요소)
     */
    binarySearch(arr: any[], search: any, key?: string) {
        const sortArr = this.quickSort(arr, key);
        return this.$_binarySearchAl(sortArr, search, key);
    }


    /**
     * 배열 인덱스로 중간 요소 제거 메서드
     */
    rmMiddleArrIdx(arr: any[], target: number | number[]) {
        const arr1 = arr;
        let arr2: any[];
        if (typeof target === "number") {
            arr1.splice(target, 1);
            console.log('splice',arr1)
            return arr1;

        } else if (target.length === 2) {
            let arr3 = [].concat(arr);
            let st = target[0];
            let end = target[1];
            if (target[1] < target[0]) {
                st = target[1];
                end = target[0];
            }
            if (end > arr.length - 1) return false
            arr3.splice(0, end);
            arr2 = arr1.splice(0, st);
            arr3.shift();
            return arr2.concat(arr3);
        }
        return false;
    }

    /**
     * internal member
     */
    private $_merge(arr1, arr2) {
        let sorted = [];
    
        while (arr1.length && arr2.length) {
            if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
            else sorted.push(arr2.shift());
        };
    
        return sorted.concat(arr1.slice().concat(arr2.slice()));
    };

    private $_binarySearchAl(arr: any[], search: any, key?: string) {
        let firstIdx = 0;
        let lastIdx = arr.length - 1;
        
        while (firstIdx < lastIdx) {
            let midIdx = Math.floor((firstIdx + lastIdx) / 2);
            let midVal = arr[midIdx];
            
            if (search === midVal) {
                return midIdx;
            } else if (search < midVal) {
                lastIdx = midIdx - 1;
            } else {
                firstIdx = midIdx + 1;
            }
        }
        
        return false;
    }

    private $_getDigit(num, place) {
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    }

    private $_digitCount(num) {
        if (num === 0) {
            return 1;
        }
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    }

    private $_mostDigits(nums) {
        let max = 0;
        for (let num of nums) {
            max = Math.max(max, this.$_digitCount(num));
        }
        return max;
    }
}