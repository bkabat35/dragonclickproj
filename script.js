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
//consider using one closure state for both buttons
/*class Clicker {
    #clicks;
    #node;
    constructor(node){
        this.#clicks = 0;
        this.#node = node;
        this.#node.addEventListener('click', () => {
            this.increment();
        })
    }
    increment(){
        this.#clicks++;
        this.#node.innerText = this.#clicks;
    }
}
let class1 = new Clicker(classes1, classes2);
console.log(class1);
