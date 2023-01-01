import { increment as incr1 } from "./clicks1.mjs";
import { increment as incr2 } from "./clicks2.mjs";
console.log('script.js')
const modules1 = document.getElementById('modules1');
const dragon = document.getElementById('dragon');

//Module
modules1.addEventListener( 'click', e => {
    e.target.innerText = incr1();
    console.log('modules1')
})
//Dragon
dragon.addEventListener( 'click', e => {
    e.target.innerText = incr2();
    console.log('dragon')
})
//Div
document.getElementById('div').addEventListener('click', e =>{
    e.target.innerText = incr1();
    console.log('dragon-clicker')
})
