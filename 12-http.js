const http = require('http')

const server = http.createServer((req, res) =>  {
    if(req.url === '/')
    {
        res.end("Hello Welcome to Home Page")
    }
    if(req.url === '/about')
    {
        res.end('We are At About Page')
    }

    res.write(`
        <h1>OOPS</h1>
        <p>We are not having the page you are looking for!
        <a href='/'> Go to HomePage <a/>
        `)
        res.end()
})

server.listen(5000)

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
console.log('hello')