import DataRandomDancer from '../build/dataRandomDancer.js';

console.log(DataRandomDancer);

const drd = new DataRandomDancer.NumberMethods();

const root = document.getElementById("root");

function playDRD(method) {
    const div = document.createElement("div");
    const ctCss = div.style;
    ctCss.padding = "10px";
    ctCss.margin = "5px";
    ctCss.borderRadius = "3px";
    ctCss.border = "2px solid gray";

    const btn = document.createElement("button");
    const btnCss = btn.style;
    btnCss.padding = "3px";
    btnCss.borderRadius = "2px";
    btnCss.background = "green";
    btnCss.margin = "5px";
    btn.innerHTML = "play"
    const detail = document.createElement("span");
    const result = document.createElement("span");
    
    switch (method) {
        case "getRanDigitNum-default":
            detail.innerHTML = "자리수 지정 랜덤 숫자 3자리수(리턴 타입 number) =>"
            btn.onclick = function(){
                const output = drd.getRanDigitNum(3); 
                result.innerHTML = output + " " +typeof output; 
            }
            break;
        case "getRanDigitNum-default-zeroFix":
            detail.innerHTML = "자리수 지정 랜덤 숫자 3자리수 뒷자리 2개 0 고정(리턴 타입 number) =>"
            btn.onclick = function(){ 
                const output = drd.getRanDigitNum(3, false, 2);
                result.innerHTML = output + " " + typeof output; 
            }
            break;
        case "getRanDigitNum-default-overZeroFix":
            detail.innerHTML = "자리수 지정 랜덤 숫자 3자리수 뒷자리 3개 0 고정(리턴 타입 number) =>"
            btn.onclick = function(){ result.innerHTML = drd.getRanDigitNum(3, false,3); }
            break;
        case "getRanDigitNum-string":
            detail.innerHTML = "자리수 지정 랜덤 숫자 3자리수(리턴 타입 string) =>"
            btn.onclick = function(){ 
                const output = drd.getRanDigitNum(3, true);
                result.innerHTML = output + " " + typeof output; 
            }
            break;
        case "getRanDigitNum-zeroFix":
            detail.innerHTML = "자리수 지정 랜덤 숫자 3자리수 뒷자리 2개 0 고정(리턴 타입 string) =>"
            btn.onclick = function(){
                const output = drd.getRanDigitNum(3, true, 2);
                result.innerHTML = output + " " + typeof output; 
            }
            break;
        case "getRanDigitNum-overZeroFix":
            detail.innerHTML = "자리수 지정 랜덤 숫자 3자리수 뒷자리 3개 0 고정(리턴 타입 string) =>"
            btn.onclick = function(){ result.innerHTML = drd.getRanDigitNum(3, true, 3); }
            break;
        case "getRanRangeNum":
            detail.innerHTML = "범위 내 랜덤 숫자 0 ~ 10 =>"
            btn.onclick = function(){ result.innerHTML = drd.getRanRangeNum(0,10); }
            break;
    }

    div.appendChild(btn);
    div.appendChild(detail);
    div.appendChild(result);
    root.appendChild(div);
}

    playDRD("getRanDigitNum-default");
    playDRD("getRanDigitNum-default-zeroFix");
    playDRD("getRanDigitNum-default-overZeroFix");
    playDRD("getRanDigitNum-string");
    playDRD("getRanDigitNum-zeroFix");
    playDRD("getRanDigitNum-overZeroFix");
    playDRD("getRanRangeNum");


