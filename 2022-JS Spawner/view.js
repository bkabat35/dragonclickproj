//View for Spawner Premium
const view = {
    init(){
        view.render()
    },
    nav: document.querySelector('.dragons-list'),
    display: document.querySelector('.display'),
    listTemplate(types){
        const typesArray = types.map(type => {
            return `<button onclick="controller.spawnDragon('${type}')">${type}</button>`
        })
        return typesArray.join('')
    }, 
    displayTemplate(dragons){
        const dragonsArray = dragons.map(dragon => {
            return `<div class='${dragon.type} dragon-container'>
            <h1>${dragon.type} Dragon</h1>
            <button class='dragon' onclick="controller.updateDragon(${dragon.timeStamp}, 'increment')">${dragon.icon}</button>
            <span class='clicks'>${dragon.clicks}</span></div>`
        })
        
        return dragonsArray.join('')
    },
    render(){
        view.nav.innerHTML = view.listTemplate(controller.getTypes())
        view.display.innerHTML = view.displayTemplate(controller.getDragons())
    }
}
view.init()