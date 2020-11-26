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
    getRanDigitNum(digit, type) {
        let number;
        while (true) {
            number = "";
            for (let i = 0; i < digit; i++) {
                let num = Math.floor(Math.random() * 10);
                console.log(num);
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
    getRanRangeNum(start, end, fixZeroDigit) {
    }
}
