import DataRandomDancer from '../src/main.js';

const drd = new DataRandomDancer();

const btn = document.getElementById("btn");
const elt = document.getElementById("result");
const btn2 = document.getElementById("btn2");
const elt2 = document.getElementById("result2");

function doit() {
    elt.innerHTML = drd.getRanDigitNum(3, "string");
}
function doit2() {
    elt2.innerHTML = drd.getRanRangeNum(1,10);
}

btn.onclick = doit;
btn2.onclick = doit2;

