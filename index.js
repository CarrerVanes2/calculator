//node index.js / 3 4
const main = () => {

    const [ , , operation, first, second] = process.argv

    console.log(`Welcome to the workshop, you provided the following params: ops:${operation}, ${first}, ${second} `)

    const calculator = {
        add: (first, second) => Number(first) + Number(second),
        sub: (first, second) => first - second,
        mul: (first, second) => first * second,
        div: (first, second) => first / second,
        exp: (first, second) => Math.pow(first,second),
    }

    if(!calculator[operation])  throw new Error('Operation not supported')

    console.log('Output: ', calculator[operation](first, second))

}

main()