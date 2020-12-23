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
        console.log(arr)
        try {
            
            if (arr.length === 1 && search === arr[0]) return true;
            if (arr.length === 1 && search !== arr[0]) return false;
            if (arr.length === 0) return false;
            
            let medium = arr.length;
            if (search === arr[medium]) return {isExist: true, idx: medium};
            else {
                let rs: any[] = [];
                if (search > arr[medium]) {
                    this.$_forLoop(medium + 1, arr.length, (i: number)=> rs.push(arr[i]));
                    return this.binarySearch(rs, search);
                } else {
                    this.$_forLoop(0, medium, (i: number)=> rs.push(arr[i]));
                    return this.binarySearch(rs, search);
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * 배열 중간 요소 제거 메서드
     */
}