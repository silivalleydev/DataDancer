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
        case "nameGenerator-kor":
            detail.innerHTML = "한국이름 랜덤 생성 =>"
            btn.onclick = function(){
                const output = drd.nameGenerator("kor"); 
                result.innerHTML = output; 
            }
            break;
        case "nameGenerator-us-male":
            detail.innerHTML = "영문 남성 이름 생성 =>"
            btn.onclick = function(){ 
                const output = drd.nameGenerator("us", "male");
                result.innerHTML = "male Name: " + output; 
            }
            break;
        case "nameGenerator-us-female":
            detail.innerHTML = "영문 여성 이름 생성 =>"
            btn.onclick = function(){ 
                const output = drd.nameGenerator("us", "female");
                result.innerHTML = "female Name: " + output; 
            }
            break;
        case "nameGenerator-jp-male":
            detail.innerHTML = "일본 남성 이름 생성 =>"
            btn.onclick = function(){ 
                const output = drd.nameGenerator("jp", "male");
                result.innerHTML = "japanese male Name: " + output; 
            }
            break;
        case "nameGenerator-jp-female":
            detail.innerHTML = "일본 여성 이름 생성 =>"
            btn.onclick = function(){ 
                const output = drd.nameGenerator("jp", "female");
                result.innerHTML = "japanese female Name: " + output; 
            }
            break;
        case "passwordGenerator-default":
            detail.innerHTML = "비밀번호 생성 기본 =>"
            btn.onclick = function(){ 
                const output = drd.passwordGenerator(8);
                result.innerHTML = "random password: " + output; 
            }
            break;
    }

    div.appendChild(btn);
    div.appendChild(detail);
    div.appendChild(result);
    root.appendChild(div);
}

    playDRD("nameGenerator-kor");
    playDRD("nameGenerator-us-male");
    playDRD("nameGenerator-us-female");
    playDRD("nameGenerator-jp-male");
    playDRD("nameGenerator-jp-female");
    playDRD("passwordGenerator-default");



