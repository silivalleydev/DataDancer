export default abstract class Base {

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
    }

    /**
     * methods
     */
    RanRangeNum (min:number, max:number){
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    forLoop (start:number, end:number, customFunc:(index?:number)=>void, isReverse:boolean = false):void {
        if (isReverse) {
            for (let i = end - 1; start - 1 < i; i--) {
                customFunc(i);
            }
        } else {
            for (let i = start; i < end; i++) {
                customFunc(i);
            }
        }
    }
}