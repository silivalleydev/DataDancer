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
     * 타입을 string으로 지정하면 String 형태의 숫자를 얻을 수 있다.
     * 
     * (digit: 자릿수, type?:"string" or undefined)
     */
    getRanDigitNum(digit:number, type?:string) {
        let number:any;
        while(true){
            number = "";
            for (let i = 0; i < digit; i++) {
                let num = Math.floor(Math.random() * 10);
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
     * (min:최소값, max:최대값)
     */
    getRanRangeNum(min:number, max:number) {
        return Math.floor((Math.random() * (max - min + 1)) + min)
    }

    /**
     * 랜덤 색상 생성 메서드
     */

    /**
     * 랜덤 이름 생성 메서드 
     * 성, 이름 데이터를 다량 가져와 랜덤하게 생성할 수 있도록 구상
     * 미국, 일본, 한국
     */

    /**
     * 랜덤 날짜 생성 메서드
     */

    /**
     * 임시 비밀번호 생성 메서드
     */

    /**
     * UUID 생성 메서드
     */

    /**
     * 랜덤 json Data 생성 메서드
     */

    /**
     * 랜덤 json Data 생성 메서드
     */
}