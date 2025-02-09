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
app.get('/api/products/:productID', (req, res) => {
    const singleProduct = products.find(product => product.id === Number(req.params.productID))
    if(!singleProduct)
    {
        return res.status(404).send('Product does not Exist..!')
    }
    res.json(singleProduct)
})
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('Hello world')
})
app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    
    let sortedProduct = [...products]
    const {search, limit} = req.query;
    if(search){
        sortedProduct = products.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    
    if(limit){
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }
    if(sortedProduct.length < 1){
    //  res.status(200).send('No Products match your search..!')
   return  res.status(200).json({sucess: true, data: []})
    }
    res.status(200).json(sortedProduct)
})


app.listen(5000, () => {
    
    console.log('server is listening on port : 5000 ...!')
})