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
    quickSort(arr: any[]) {
        if (arr.length <= 1) { 
            return arr;
        } else {
    
            var left = [];
            var right = [];
            var newArray = [];
            var pivot = arr.pop();
            var length = arr.length;
    
            for (var i = 0; i < length; i++) {
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
     * 배열 중간 요소 제거 메서드
     */


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
        
        return -1;
    }
}