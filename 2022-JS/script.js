//import { increment as incr1 } from "./clicks1.mjs";
import { increment as incr2 } from "./clicks2.mjs";
//console.log('script.js')

//const modules1 = document.getElementById('modules1');
//const dragon = document.getElementById('dragon');
const dragon2 = document.querySelector('#modules1');
//const clickDr = document.querySelector('.clicks');
console.log(dragon2);
//let classes1 = document.getElementById('modules1');
let dragonClicker = document.getElementById('dragon'); 
//console.log(classes1, dragonClicker);
//const div = document.querySelector('dragon-clicker');

/*   //Module(possible alt.)
//let clicks = 0;
dragon2.addEventListener('click', e => {
    //e.target.innerText = incr2();
    console.log(e.target);
    //clicks += 1;
    dragon2.innerText = '🐲' + 1;
    //dragon2.innerText = Number(dragon2.innerText) + 1;
})*/

//Module
dragon2.addEventListener( 'click', e => {
    e.target.innerText = incr2() + '🐲';
    console.log('dragon2');
})


//Classes
class Clicker {
    #clicks;
    #dragonClicker;//initially #node; switch with #dragonButton; add #dragonOutput below
    constructor(node){//add parentNode in place of node
        //this.child = dragonClicker
        this.#clicks = 0;
        this.#dragonClicker = node;//this.#dragonButton=parentNode.querySelector('button')
        //this.#dragonOutput=parentNode.querySelector('output')
        this.#dragonClicker.addEventListener('click', () => {//switch this.#dragonButton continue addEvent
            this.increment();
        })
    }
    increment(){
        this.#clicks++;
        this.#dragonClicker.innerText = this.#clicks +'🐉';//switch this.#dragonOutput in place of this.#dragonClicker

        /*this.#clicks++;
        this.#dragonClicker.innerText = this.#clicks +'🐲';*///try to use one closure state for both buttons
    }
}
let class1 = new Clicker(dragonClicker);//this.#dragonOutput=parentNode.querySelector('output');
//let class2 = new Clicker(classes1);
console.log(class1);
