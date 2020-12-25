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
     * quick sort
     */
    quickSort(arr: any[]) {
        if (arr.length <= 1) { 
            return arr;
        } else {
    
            let left = [];
            let right = [];
            let newArray = [];
            let pivot = arr.pop();
            let length = arr.length;
    
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

    /**
     * mergeSort
     */
    mergeSort(arr: any[]) {
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2),
            left = this.mergeSort(arr.slice(0, mid)),
            right = this.mergeSort(arr.slice(mid));
    
        return this.$_merge(left, right);
    };

    

    /**
     * 이진 탐색 알고리즘
     * 
     * (arr: 배열, search: 찾을요소)
     */
    binarySearch(arr: any[], search: any) {
        const sortArr = this.quickSort(arr);
        return this.$_binarySearchAl(sortArr, search);
    }


    /**
     * 배열 인덱스로 중간 요소 제거 메서드
     */
    rmMiddleArrIdx(arr: any[], target: number | number[]) {
        const arr1 = arr;
        let arr2: any[];
        if (typeof target === "number") {
            arr2 = arr1.splice(0, target);
            arr1.shift();
            return arr2.concat(arr1);
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

    private $_binarySearchAl(arr: any[], search: any) {
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
}