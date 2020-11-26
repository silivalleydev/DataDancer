import DataRandomDancer from '../src/main.js';

const drd = new DataRandomDancer();


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
            btn.onclick = function(){ result.innerHTML = drd.getRanDigitNum(3); }
            break;
        case "getRanDigitNum-string":
            detail.innerHTML = "자리수 지정 랜덤 숫자 3자리수(리턴 타입 string) =>"
            btn.onclick = function(){ result.innerHTML = drd.getRanDigitNum(3, "string"); }
            break;
        case "getRanRangeNum":
            detail.innerHTML = "범위 내 랜덤 숫자 1 ~ 10 =>"
            btn.onclick = function(){ result.innerHTML = drd.getRanRangeNum(1,10); }
            break;
    }

    div.appendChild(btn);
    div.appendChild(detail);
    div.appendChild(result);
    root.appendChild(div);
}

    playDRD("getRanDigitNum-default");
    playDRD("getRanDigitNum-string");
    playDRD("getRanRangeNum");


