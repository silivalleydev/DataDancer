import DataDancer from '../dist/output/dataDancer.js';

console.log(DataDancer);

const drd = new DataDancer.VisualMethods();

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
        case "colorGen-default":
            detail.innerHTML = "색상 결과 기본 =>"
            btn.onclick = function(){
                const output = drd.colorGenerator(); 
                result.innerHTML = output;
                const st = result.style;
                st.width = "100px"; 
                st.height = "100px"; 
                st.background = output; 
                st.display = "inline-block"; 
            }
            break;
        case "colorGen-rgb":
            detail.innerHTML = "색상 결과 rgb =>"
            btn.onclick = function(){ 
                const output = drd.colorGenerator("rgb"); 
                result.innerHTML = output;
                const st = result.style;
                st.width = "100px"; 
                st.height = "100px"; 
                st.background = output; 
                st.display = "inline-block"; 
            }
            break;
        case "gradient-default":
            detail.innerHTML = "그라디언트 결과 rgb =>"
            btn.onclick = function(){ 
                const output = drd.gradientGenerator(); 
                result.innerHTML = output;
                const st = result.style;
                st.width = "100%"; 
                st.height = "200px"; 
                st.background = output; 
                st.display = "inline-block"; 
            }
            break;
    }

    div.appendChild(btn);
    div.appendChild(detail);
    div.appendChild(result);
    root.appendChild(div);
}

    playDRD("colorGen-default");
    playDRD("colorGen-rgb");
    playDRD("gradient-default");
    playDRD("getRanPassword-default");



