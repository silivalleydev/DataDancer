export default class VisualMethods {

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
     * 입력된 클래스 또는 아이디의 DOM 정보를 가져온다.
     * DOM과 해당 Dom과 관련된 정보(className, onClick, style 등등)들을 반환
     * 
     * (type: "id" or "class", name: className or idName)
     */

    /**
     * 랜덤 색상 생성 메서드
     */

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