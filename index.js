//node index.js / 3 4
const prompt = require('prompt')
const main = () => {
    let total = 0
    // let [ , , operation, ... numbers] = process.argv
    // console.log('Instructions: \n CLEAR to clear the memory, \n ADD to add ')
    while(true){
    let number = prompt.get('Insert a number')
    if(typeof Number(number)!= "number"){
        console.error('This is not a number')
    }else{
        let operation = prompt.get('What do you want to do?')
        const calculator = {
            add: (first, second) => first + second,
            sub: (first, second) => first - second,
            mul: (first, second) => first * second,
            div: (first, second) => first / second,
            exp: (first, second) => Math.pow(first,second),
        }
        if(!calculator[operation])  console.error('Operation not supported')
        total = calculator[operation](total, number)
        console.log('Output: ',total )
    }
    }
}

main()
// node index.js 3/4+5-2