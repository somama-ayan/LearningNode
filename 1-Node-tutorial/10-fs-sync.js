console.log('start....')
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first , second)

writeFileSync('./content/result-sync.txt',
    `Here is the result: ${first}, ${second} /n`,
    {flag: 'a'}
)
console.log('Task ended ....')
console.log('Next Task Started .....')