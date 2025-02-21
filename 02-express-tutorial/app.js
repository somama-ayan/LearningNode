const express = require('express')
const logger = require('./logger')
const authorize = require('./authorize')
const app = express()
// req => middleware => res
// 1. use vs route
// 2 options = > our own / express / third party
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

app.get('/api/items' , (req, res) => {
    res.send('items')
})
app.listen(5000, () => {
    console.log('Server is listening on Port : 5000')
})

