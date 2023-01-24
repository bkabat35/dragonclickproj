const nav = document.querySelector('.dragons-list')
console.log('script3')
//const myTemplate = (dragonType) => `<li><button class='button'>${dragonType}</button></li>`//reference to below this caused a conflict when parsing
const display = document.querySelector('.display')
console.log(display);
const dragonTypes = ['mountain', 'flame', 'water', 'metallic', 'sky', 'forest']
console.log(nav)
nav.innerHTML= dragonTypes.map(type => {
    return `<button onclick="spawnDragon('${type}')">${type}</button>`//<li onclick='console.log("Hello")'></li>
}).join('')

const dragons = []

function spawnDragon(type){
        const dragon = dragonFactory(type)
        dragons.push(dragon)
        console.log('check', dragons)
        rerender()
    }
function increment(timeStamp){
        const target = dragons.find(dragon => dragon.timeStamp === timeStamp)
        console.log(target, timeStamp)//console.log() without strings so that you can see what the variables print out as
        target.clicks += 1;
        rerender()
}
function rerender(){
    display.innerHTML = templateFactory(dragons)
}
function dragonFactory(type){
        //name objs for this project such as type, clicks as params above; //could go in the controller as well
        return {
            type: type,
            clicks: 0,
            cssClass:  `.${type}`,
            icon: '🐉',
            timeStamp:  Date.now()
            
        } 
}
function templateFactory(dragons){
    return dragons.map(dragon => {
        return `<div class='${dragon.type} dragon-container'>
        <h1>${dragon.type} Dragon</h1>
        <button class='dragon' onclick='increment(${dragon.timeStamp})'>${dragon.icon}</button>
        <span class='clicks'>${dragon.clicks}</span></div>`
    }).join('')
}
    // functions could go in the controller as well
 