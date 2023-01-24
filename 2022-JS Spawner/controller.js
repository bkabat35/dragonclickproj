//Controller - Spawner Premium
const controller = {
    getDragons() {
        return model.dragons
    },
    getTypes(){
        return model.dragonTypes
    },
    spawnDragon(type){
        //const dragon = dragonFactory(type)
        model.addDragon(type)
        //console.log('model check', model.dragons)
        view.render()
    },
    updateDragon(timeStamp, command){
        switch(command){
            case 'increment':
                model.increment(timeStamp)
                break;
            default:
                break;
        }
    view.render()
    }
}