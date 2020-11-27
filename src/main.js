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
    getRanDigitNum(digit, type = "", zeroFixBackDigit) {
        let number;
        function changeBackDigitZero(digit, zeroFixBackDigit) {
            if (zeroFixBackDigit < digit) {
                const arr = number.split('');
                const endPoint = arr.length - zeroFixBackDigit - 1;
                for (let i = arr.length - 1; endPoint < i; i--) {
                    arr[i] = 0;
                }
                number = arr.join('');
                return number;
            }
            else
                return false;
        }
        while (true) {
            number = "";
            for (let i = 0; i < digit; i++) {
                let num = Math.floor(Math.random() * 10);
                number += String(num);
            }
            if (type === "string" && zeroFixBackDigit) {
                if (changeBackDigitZero(digit, zeroFixBackDigit))
                    return changeBackDigitZero(digit, zeroFixBackDigit);
                else
                    alert("zeroFixBackDigit값을 digit보다 작게 설정하세요");
                return false;
            }
            else if (type === "string" && !zeroFixBackDigit)
                return number;
            number = parseInt(number);
            number = String(number);
            if (number.length === digit && zeroFixBackDigit) {
                if (changeBackDigitZero(digit, zeroFixBackDigit))
                    return parseInt(changeBackDigitZero(digit, zeroFixBackDigit));
                else
                    alert("zeroFixBackDigit값을 digit보다 작게 설정하세요");
                return false;
            }
            else if (String(number).length === digit && !zeroFixBackDigit)
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
