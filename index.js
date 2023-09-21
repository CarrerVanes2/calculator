

//node index.js / 3 4
const main = () =>{
    const supportedOperation = ['add', 'sub', 'div', 'mul']

    const [ , , operation, first, second] = process.argv

    if(!supportedOperation.includes(operation)){
        throw new Error('Operation not supported')
    }

    const test = {
        add: (first, second) => first + second,
        sub: (first, second) => first - second
    }
}