const express = require('express')
const logger = require('./logger')
const authorize = require('./authorize')
const app = express()
// req => middleware => res
// 1. use  --> app.use([logger, authorize])  vs route --> app.get('/api/items' , [logger, authorize],(req, res) => {
// 2 options = > our own --> i.e logger, authorize/ express / third party
// express --> app.use(express.static('./publis')) // get all static data from public repository
// third party --> i.e morgan --> app.use(morgan('tainy))
app.use([logger, authorize])
app.get('/' , (req, res) => {
    res.send('Home Page')
    console.log(req.user)
})
app.get('/about' , (req , res) => {
    res.send('About Page')
})
app.get('/api/products' , (req, res) => {
    res.send('products')
})

app.get('/api/items' , [logger, authorize],(req, res) => {
    res.send('items')
})
app.listen(5000, () => {
    console.log('Server is listening on Port : 5000')
})

