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