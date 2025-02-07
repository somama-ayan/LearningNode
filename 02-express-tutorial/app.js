const express = require('express')

const app = express()

const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h2>Home Page </h2> <a href="/api/products">Products</a>')
})
app.get('/api/products' , (req, res) => {
    const newProducts = products.map(product => {
        const {id, name , image } = product;
        return {id , name , image}
    })
    res.send(newProducts)
})

app.listen(5000, () => {
    console.log('server is listening on port : 5000 ...!')
})