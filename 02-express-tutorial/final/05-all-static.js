const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('./public'))
// setup static and middleware 
app.get('/a', (req, res) => {
    // console.log(path.resolve(__dirname, './navbar-app/index.html'))
    // res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
    // adding html to static assets   
    // conventionally all static assets 
    // are stored in public repository and 
    // are express take care of it to send it in res 
    // automatically by using static middlware function
    // SSR
})
app.all('*', (req, res) => {
    res.status(404).send('Resource not Found...!')
})

app.listen(5000, () => {
    console.log('server is listening on port : 5000 ....!')
})