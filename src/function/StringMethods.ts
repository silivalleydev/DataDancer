import { k_first_name, k_last_name, e_female_name, e_male_name  } from '../data/nameData';

export default class StringMethods {

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
     * 랜덤 이름 생성 메서드 
     * 영어 이름과 한국 이름을 생성할 수 있다.
     * 영어 이름의 경우 성별을 지정할 수 있다.
     * 
     * (country: "us" or "kor", sex: "male" or "female")
     */
    getRanName(country:string, sex:string = "male") {
        
        const ranIndex = (min:number, max:number) => {
            return Math.floor((Math.random() * (max - min + 1)) + min)
        }

        if (country === "kor") {
            const idx1 = ranIndex(0, k_last_name.length) - 1;
            const idx2 = ranIndex(0, k_first_name.length) - 1;
            let idx3 = ranIndex(0, k_first_name.length) - 1;

            while(true) {
                if (idx2 === idx3) idx3 = ranIndex(0, k_first_name.length) - 1;
                else break;
            }

            return k_last_name[idx1] + k_first_name[idx2] + k_first_name[idx3];
        } else if (country === "us") {
            if ( sex === "male" ) {
                const idx = ranIndex(0, e_male_name.length) - 1;
                return e_male_name[idx];
            } else {
                const idx = ranIndex(0, e_female_name.length) - 1;
                return e_female_name[idx]
            }
        }
    }

    /**
     * UUID 생성 메서드
     */

    /**
     * 임시 비밀번호 생성 메서드
     */
}