import Base from '../common/Base';
import { k_first_name, k_last_name, e_female_name, e_male_name  } from '../data/nameData';

export default class StringMethods extends Base {

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
     * 랜덤 이름 생성 메서드 
     * 영어 이름과 한국 이름을 생성할 수 있다.
     * 영어 이름의 경우 성별을 지정할 수 있다.
     * 
     * (country: "us" or "kor", sex: "male" or "female")
     */
    getRanName(country:string, sex:string = "male") {
        if (country === "kor") {
            const idx1 = this.ranRangeNum(0, k_last_name.length) - 1;
            const idx2 = this.ranRangeNum(0, k_first_name.length) - 1;
            let idx3 = this.ranRangeNum(0, k_first_name.length) - 1;

            while(true) {
                if (idx2 === idx3) idx3 = this.ranRangeNum(0, k_first_name.length) - 1;
                else break;
            }
            return k_last_name[idx1] + k_first_name[idx2] + k_first_name[idx3];
        } else if (country === "us") {
            if ( sex === "male" ) {
                const idx = this.ranRangeNum(0, e_male_name.length) - 1;
                return e_male_name[idx];
            } else {
                const idx = this.ranRangeNum(0, e_female_name.length) - 1;
                return e_female_name[idx]
            }
        }
    }

    /**
     * UUID 생성 메서드
     */

    /**
     * MAC 주소 생성 메서드
     */

    /**
     * 임시 비밀번호 생성 메서드 (4자리 이상만 생성가능)
     * 
     * 기본은 영문 대소문자는 포함이며, 상황에 따라 숫자 또는 특수문자를 포함할 수 있다
     * 
     * (digit:자리수 <- integer, include: all, number, symbol <-string)
     */
    getRanPassword(digit: number, include: string = null) {
        if(digit < 4) return false;

        const engArr: string[] = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
            'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
            'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
            'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
            'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
            'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
            'w', 'x', 'y', 'z'
        ];
        const numArr: number[] = [
            0, 1, 2, 3, 4,
            5, 6, 7, 8, 9
        ];
        const symbolArr: string[] = [
            '!', '*', '#',
            '$', '%', '&',
            '?', '@', '^'
        ];
        let result = "";
        let howManyIncludeNum = this.ranRangeNum(1, Math.floor(digit/3));
        let howManyIncludeSymbol = this.ranRangeNum(1, Math.floor(digit/3));

        const typeArr = [];

        this.forLoop(0, digit, (i: number)=> typeArr.push({type: null}));

            while (true) {
                if (!include) break;

                let index = this.ranRangeNum(0, digit - 1);
                
                if ((include === "all" || include === "symbol") && (typeArr[index].type === null && howManyIncludeSymbol !== 0)) {
                    typeArr[index].type = "symbol";
                    howManyIncludeSymbol -= 1;
                }
                if ((include === "all" || include === "number") && (typeArr[index].type === null && howManyIncludeNum !== 0)) {
                    typeArr[index].type = "number";
                    howManyIncludeNum -= 1;
                }
                
                if (include === "all" && howManyIncludeSymbol === 0 && howManyIncludeNum === 0) break;
                if (include === "symbol" && howManyIncludeSymbol === 0) break;
                if (include === "number" && howManyIncludeNum === 0) break;
            }   

        const createRanPw: ()=>void = () => {    
            typeArr.forEach((item)=>{
                if (item.type === "number") result += numArr[this.ranRangeNum(0,numArr.length-1)];
                else if (item.type === "symbol") result += symbolArr[this.ranRangeNum(0,symbolArr.length-1)];
                else result += engArr[this.ranRangeNum(0,engArr.length-1)]
            })
        }
        
        createRanPw();
                
        return result;
    }
}