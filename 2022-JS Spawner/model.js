//Model - Spawner Premium
const model = {
    dragons: [],
    dragonTypes: ['mountain', 'flame', 'water', 'metallic', 'sky', 'forest'],
    dragonFactory(type){
        return {
            type: type,
            clicks: 0,
            cssClass:  `.${type}`,
            icon: '🐉',
            timeStamp:  Date.now()
        } 
},
    addDragon(type){
        model.dragons.push(model.dragonFactory(type))
    },
    increment(timeStamp){
        const target = model.dragons.find(dragon => dragon.timeStamp === timeStamp)
        console.log(target, timeStamp)//console.log() without strings so that you can see what the variables print out as
        target.clicks += 1;
}
}