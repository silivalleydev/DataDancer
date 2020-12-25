
import DataRandomDancer from '../build/dataRandomDancer.js';

const dataArr = [];
const idxlist = [275, 405, 439, 877, 1085, 161]
const arr = []
idxlist.forEach(a=>{
    arr.push(dataArr[a])
})

arr.forEach(a=>{
    const idx = dataArr.indexOf(a);
    dataArr.splice(idx, 1);
})

console.log(dataArr)


const G = [].concat(dataArr);
const M = [];


const el = document.getElementById("root");

const cel1 = document.createElement("div");
const cel2 = document.createElement("div");

el.appendChild(cel1);
el.appendChild(cel2);

M.forEach(a => {
    const el = document.createElement("div");
    
    cel1.appendChild(el)
    el.innerHTML = a;
})

cel1.style.padding = "20px";
cel1.style.border = "1px solid black";


G.forEach(a => {
    const el = document.createElement("div");
    
    cel2.appendChild(el)
    el.innerHTML = a;
})

cel2.style.padding = "20px";
cel2.style.border = "1px solid black";