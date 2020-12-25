import Base from '../common/Base';

export default class VisualMethods extends Base {

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
     * 입력된 클래스 또는 아이디의 DOM 정보를 가져온다.
     * DOM과 해당 Dom과 관련된 정보(className, onClick, style 등등)들을 반환
     * 
     * (type: "id" or "class", name: className or idName)
     */

    /**
     * 랜덤 색상 생성 메서드
     */
    colorGenerator(type?: string) {           
        let rs = "#"  +  Math.floor(Math.random() * 16777215).toString(16);
        if (type === "rgb") {
            const color1=Math.floor(Math.random() * 255) + 1;
            const color2=Math.floor(Math.random() * 255) + 1;
            const color3=Math.floor(Math.random() * 255) + 1;
            rs = 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')';
        }
        return rs  
    }
    /**
     * (direction?: to right, to left, to top, to bottom)
     */
    gradientGenerator(direction?: string): string {
        let direcArr = ["to right", "to left", "to top", "to bottom"]
        let rs: string;
        let direc: string;

        if (direction) direc = direction;
        else direc = direcArr[this.$_ranRangeNum(0, direcArr.length - 1)];
        
        rs = `linear-gradient(${direc}, ${this.colorGenerator()}, ${this.colorGenerator()} )`;
        
        return rs;
    }

    /**
     * 지정한 아이디 태그에 스크롤 태그를 걸어주는 메서드
     * 
     * (id: idName)
     */
    setScrollConatiner(id: string): void {
        let et: HTMLElement;
        et = document.getElementById(id);
        const st = et.style;
        st.overflow = "auto";
    }
}