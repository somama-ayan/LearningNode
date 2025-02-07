const experss = require('express')
const app = experss()

app.get('/' , (req, res) => {
    console.log('User is hitting homepage')
    res.status(200).send('Home Page')
})
app.get('/about', (req, res) => {
    res.status(200).send('<h2> About Page </h2>')
})
app.all('*' , (req, res) => {
    res.status(404).send('<h2>Resources Not Found ...!</h2>')
})

app.listen(5000, () => {
    console.log('The server is listening on port 5000;')
})

// http methods 
// app.get ()
// app.post() 
// app.put ()
// app.delete()

// app.use() --> for middlewares 
// app.all()
// app.listen()