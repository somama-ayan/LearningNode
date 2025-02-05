// npm global command , comes with node
// npm --version

// npm calls reusable code a --> pakage 
// module , dependency , package  --> these three terms are used for reusable code interchangebly


// local dependency --> use it only in this particular project 
// npm i <packageName> for widows 

// pakage.json --> manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (ecerything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(items)
console.log(newItems)