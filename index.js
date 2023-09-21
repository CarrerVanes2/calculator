

//node index.js / 3 4
const main = () =>{
    const supportedOperation = ['add', 'sub', 'div', 'mul']

    const [ , , operation, first, second] = process.argv

    if(!supportedOperation.includes(operation)){
        throw new Error('Operation not supported')
    }

    const calculator = {
        add: (first, second) => first + second,
        sub: (first, second) => first - second,
        mul: (first, second) => first * second,
        div: (first, second) => first / second
    }

    console.log('Output: ', calculator[operation](first, second))

}