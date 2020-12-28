import Base from '../common/Base';

type Division = {
    origin: number[],
    avarage: number,
    division: number[]
}
export default class NumberMethods extends Base {

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
     * 자리수를 지정하여 랜덤한 정수형 난수를 얻는 메서드
     * 
     * 기본 반환타입은 Integer이며
     * 
     * isString을 true로 지정하면 String 형태의 숫자를 얻을 수 있다.
     * 
     * zeroFixBackDigit을 설정하면 뒷자리수를 기준으로 몇자리를 0으로 지정할 것인지 설정할 수 있다.
     * 
     * zeroFixBackDigit은 digit보다 작아야한다.
     * 
     * (digit: 자릿수, isString: default는 false, zeroFixBackDigit: 0으로 고정할 뒷 자리수)
     */
    getRanDigitNum(digit: number, isString: boolean = false, zeroFixBackDigit?: number) {
        let rs: any;
        const changeBackDigitZero = (digit: number, zeroFixBackDigit: number) => {
            if (zeroFixBackDigit < digit) {
                const arr = rs.split('');
                const endPoint = arr.length - zeroFixBackDigit - 1;
                for (let i = arr.length-1; endPoint < i; i--) {
                    arr[i] = 0;
                }
                rs = arr.join('');
                return rs;
            } else return false;
            
        }
        while(true){
            rs = "";
            this.$_forLoop(0, digit, ()=>{
                let num = Math.floor(Math.random() * 10);
                rs += String(num);
            })

            if (isString === true && zeroFixBackDigit){
                if(changeBackDigitZero(digit, zeroFixBackDigit)) {
                    return changeBackDigitZero(digit, zeroFixBackDigit);
                } else {
                    alert("zeroFixBackDigit값을 digit보다 작게 설정하세요"); return false
                } 
            } else if (isString === true && !zeroFixBackDigit) return rs;
    
            rs = parseInt(rs);
            rs = String(rs);
            if (rs.length === digit && zeroFixBackDigit){
                if(changeBackDigitZero(digit, zeroFixBackDigit)) {
                    return parseInt(changeBackDigitZero(digit, zeroFixBackDigit));
                }
                else {
                    alert("zeroFixBackDigit값을 digit보다 작게 설정하세요"); return false;
                }
            } else if (String(rs).length === digit && !zeroFixBackDigit) break;
        }

        if (!isString) return parseInt(rs);
    }

    /**
     * 숫자의 범위를 지정하여 정수형 난수를 얻는 메서드.
     * 
     * 홀수, 짝수를 지정할 수 있다.
     * 
     * (min:최소값, max:최대값, )
     */
    getRanRangeNum(min: number, max: number): number {
        return this.$_ranRangeNum(min, max)
    }

    sum(arr: number[]): number {
        let rs = 0;
        arr.forEach(n=>{
            rs += n;
        })
        return rs;
    }

    avarage(arr: number[]): number {
        let rs = 0;
        rs += this.sum(arr);
        return rs / arr.length; 
    }

    division(arr: number[]): Division {
        const avarage = this.avarage(arr);
        const division = [];

        arr.forEach(num => {
            division.push(num - avarage);
        })

        return {
            origin: arr,
            avarage,
            division,
        }
    }
    
    variance(arr: number[]) {
        const division = this.division(arr).division;
        let rs = 0;
        division.forEach(d => {
            rs += d*d;
        });
        rs = rs / division.length;
        return rs;
    }
}