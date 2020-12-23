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
     * 이진 탐색 알고리즘
     */
    binarySearch(arr: any[], search: any) {
        let firstIdx = 0;
        let lastIdx = arr.length - 1;
        
        while (firstIdx < lastIdx) {
            let midIdx = (firstIdx + lastIdx) / 2;
            let midVal = arr[midIdx];
            
            if (search == midVal) {
                return midIdx;
            } else if (search < midVal) {
                lastIdx = midIdx - 1;
            } else {
                firstIdx = midIdx + 1;
            }
        }
        
        return -1;
    }

    /**
     * 배열 중간 요소 제거 메서드
     */
}