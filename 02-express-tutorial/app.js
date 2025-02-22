const express = require('express')
const {data, people} = require('./data')

const app =  express()
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: true}))
app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/login', (req,res) => {
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide the crediantals')
})

app.listen(5000, () => {
    console.log('API listening on port: 5000')
})