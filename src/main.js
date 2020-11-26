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
     * zeroFixBackDigit을 설정하면 뒷자리수를 기준으로 몇자리를 0으로 지정할 것인지 설정할 수 있다.
     *
     * zeroFixBackDigit은 digit보다 작아야한다.
     *
     * (digit: 자릿수, type?:"string" or undefined)
     */
    getRanDigitNum(digit, type, zeroFixBackDigit) {
        let number;
        while (true) {
            number = "";
            for (let i = 0; i < digit; i++) {
                let num = Math.floor(Math.random() * 10);
                number += String(num);
            }
            if (type === "string")
                return number;
            number = parseInt(number);
            if (String(number).length === digit)
                break;
        }
        if (!type)
            return parseInt(number);
    }
    /**
     * 숫자의 범위를 지정하여 난수를 얻는 메서드.
     *
     * (min:최소값, max:최대값)
     */
    getRanRangeNum(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
}
