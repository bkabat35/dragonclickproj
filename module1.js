var someVar = '2.) some data'

export function someFunc(){
    return `${someVar} for output - ${someOtherFunc()}`
}
function someOtherFunc(){
    return 2
}
export function anotherFunc(){
    return `${someVar} ${someFunc()}`
}
console.log(someFunc())

let clicks = 0

export function increment(){
    return clicks++
}

