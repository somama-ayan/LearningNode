const {createReadStream} = require('fs')
const { result } = require('lodash')

const stream = createReadStream(
    './content/big.txt',
    {highWaterMark: 90000, encoding: 'utf8'}
)
// default 64kb
// last buffer -- remainder
// highwaterMark -- control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = createReadStream('./content/big.txt', {encoding: utf8})
stream.on('data', (result) => {
    console.log(result)
})