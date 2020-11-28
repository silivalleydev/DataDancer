import DataRandomDancer from '../build/dataRandomDancer.js';

console.log(DataRandomDancer);

const drd = new DataRandomDancer.StringMethods();

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
        case "getRanName-kor":
            detail.innerHTML = "한국이름 랜덤 생성 =>"
            btn.onclick = function(){
                const output = drd.getRanName("kor"); 
                result.innerHTML = output; 
            }
            break;
        case "getRanName-us-male":
            detail.innerHTML = "영문 남성 이름 생성 =>"
            btn.onclick = function(){ 
                const output = drd.getRanName("us", "male");
                result.innerHTML = "male Name: " + output; 
            }
            break;
        case "getRanName-us-female":
            detail.innerHTML = "영문 여성 이름 생성 =>"
            btn.onclick = function(){ 
                const output = drd.getRanName("us", "female");
                result.innerHTML = "female Name: " + output; 
            }
            break;
    }

    div.appendChild(btn);
    div.appendChild(detail);
    div.appendChild(result);
    root.appendChild(div);
}

    playDRD("getRanName-kor");
    playDRD("getRanName-us-male");
    playDRD("getRanName-us-female");



