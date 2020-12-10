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
            const idx1 = this.RanRangeNum(0, k_last_name.length) - 1;
            const idx2 = this.RanRangeNum(0, k_first_name.length) - 1;
            let idx3 = this.RanRangeNum(0, k_first_name.length) - 1;

            while(true) {
                if (idx2 === idx3) idx3 = this.RanRangeNum(0, k_first_name.length) - 1;
                else break;
            }
            return k_last_name[idx1] + k_first_name[idx2] + k_first_name[idx3];
        } else if (country === "us") {
            if ( sex === "male" ) {
                const idx = this.RanRangeNum(0, e_male_name.length) - 1;
                return e_male_name[idx];
            } else {
                const idx = this.RanRangeNum(0, e_female_name.length) - 1;
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
     * 임시 비밀번호 생성 메서드
     * 
     * 기본은 영문 대소문자는 포함이며, 상황에 따라 숫자 또는 특수문자를 포함할 수 있다
     * 
     * (digit:자리수 <- integer, include: all, number, symbol <-string)
     */
    getRanPassword(digit?:number, include?:string) {
        
        const engArr = [
            65,  66,  67,  68,  69,  70,  71,  72,  73,  74,
            75,  76,  77,  78,  79,  80,  81,  82,  83,  84,
            85,  86,  87,  88,  89,  90,  97,  98,  99, 100,
            101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
            111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
            121, 122
        ];

        const numArr = [
            0, 1, 2, 3, 4,
            5, 6, 7, 8, 9
         ]

        




        String.fromCharCode(this.RanRangeNum(65, 90));
        String.fromCharCode(this.RanRangeNum(97, 122));
    }
}