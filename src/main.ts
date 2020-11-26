

export default class DataRandomDancer {

    /** 
     * fields
     */

    /**
     * properties getter setter
     */

    /**
     *  constructor
     */
    constructor() {
    }

    /**
     * methods
     */

    /**
     * 자리수를 지정하여 랜덤한 난수를 얻는 메서드
     * 
     * 기본 반환타입은 Integer이며
     * 
     * 타입을 string으로 지정하면 String 형태의 숫자를 얻을 수 있다
     * 
     * (digit: 자릿수, type?:"string" or undefined)
     */
    getRanDigitNum(digit:number, type?:string) {
        let number:any;
        while(true){
            number = "";
            for (let i = 0; i < digit; i++) {
                let num = Math.floor(Math.random() * 10);
                console.log(num)
                number += String(num);
            }

            if( type === "string")
                return number
    
            number = parseInt(number);
            if( String(number).length === digit )
                break;
        }

        if( !type ) 
            return parseInt(number);
    }

    /**
     * 숫자의 범위를 지정하여 난수를 얻는 메서드.
     * 
     *  fixZeroDigit(0으로 고정시킬 자릿수)을 원하는 수를 얻을 수 있다 
     * 
     * (min:최소값, max:최대값, fixZeroDigit: 뒷자릿수)
     */
    getRanRangeNum(min:number, max:number, fixZeroDigit:number) {
        let number: string;
        return Math.floor((Math.random() * (max - min + 1)) + min)

    }
}