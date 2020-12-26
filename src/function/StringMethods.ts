import Base from '../common/Base';
import { 
    engData, 
    symbolData, 
    numData 
} from '../data/passwordData';
import {
    k_first_name, 
    k_last_name, 
    e_female_name, 
    e_male_name, 
    jp_female_name,
    jp_male_name,
    jp_last_name
} from '../data/nameData';

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
     * nameGenerator
     * 
     * support us, japan, korea name
     * 
     * if you generate us or japanese Name, you can choose gender
     * 
     * 외국(영어권, 일어권) 이름과 한국 이름을 생성할 수 있다.
     * 외국 이름의 경우 성별을 지정할 수 있다.
     * 
     * (locale: "us" or "kor" or "jp", gender: "male" or "female")
     */
    nameGenerator(locale:string, gender:string = "male") {
        if (locale === "kor") {
            const idx1 = this.$_ranRangeNum(0, k_last_name.length - 1);
            const idx2 = this.$_ranRangeNum(0, k_first_name.length - 1);
            let idx3 = this.$_ranRangeNum(0, k_first_name.length - 1);

            while(true) {
                if (idx2 === idx3) idx3 = this.$_ranRangeNum(0, k_first_name.length - 1);
                else break;
            }
            return k_last_name[idx1] + k_first_name[idx2] + k_first_name[idx3];
        } else if (locale === "us") {
            if ( gender === "male" ) {
                const idx = this.$_ranRangeNum(0, e_male_name.length - 1);
                return e_male_name[idx];
            } else {
                const idx = this.$_ranRangeNum(0, e_female_name.length - 1);
                return e_female_name[idx]
            }
        } else if (locale === "jp") {
            const laIdx = this.$_ranRangeNum(0, jp_last_name.length - 1); 
            const lastName = jp_last_name[laIdx].split(', ');
            if ( gender === "male" ) {
                const idx = this.$_ranRangeNum(0, jp_male_name.length - 1);
                const name = jp_male_name[idx].split(', ');
                return `${name[0]} ${lastName[0]}(${name[1]} ${lastName[1]})`;
            } else {
                const idx = this.$_ranRangeNum(0, jp_female_name.length - 1);
                const name = jp_female_name[idx].split(', ');
                return `${name[0]} ${lastName[0]}(${name[1]} ${lastName[1]})`;
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
    passwordGenerator(digit: number, include: string = null) {
        if(digit < 4) return false;


        let result: string = "";
        let howManyIncludeNum: number = this.$_ranRangeNum(1, Math.floor(digit/3));
        let howManyIncludeSymbol: number = this.$_ranRangeNum(1, Math.floor(digit/3));

        const typeArr = [];

        this.$_forLoop(0, digit, (i: number)=> typeArr.push({type: null}));

            while (true) {
                if (!include) break;

                let index = this.$_ranRangeNum(0, digit - 1);
                
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
                if (item.type === "number") result += numData[this.$_ranRangeNum(0,numData.length-1)];
                else if (item.type === "symbol") result += symbolData[this.$_ranRangeNum(0,symbolData.length-1)];
                else result += engData[this.$_ranRangeNum(0,engData.length-1)]
            })
        }
        
        createRanPw();
                
        return result;
    }
}