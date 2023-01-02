import { increment as modIncr1 } from "./clicks.mjs";
import { increment as modIncr2 } from "./clicks.mjs";

const modules1 = document.getElementById('div');
const dragon = document.getElementById('div');

//Module
modules1.addEventListener('click', e => {
    e.target.innerText = incr1()
})
//Dragon
dragon.addEventListener('click', e => {
    e.target.innerText = incr2()
})
