const {readFileSync} = require('fs')
const http = require('http')

const homePage = readFileSync('./navbar-app/index.html')
const homeCss = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(204, { 'Content-Type': 'text/plain' }); // No Content
        res.end();
        return;
    }
// Home page
    if(req.url === '/')
    {
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        console.log(req.url)
    res.write(homePage); 
    res.end();
    }
    // Styles.css
    else if(req.url === '/styles.css')
    {
        res.writeHead(200, { 'Content-Type': 'text/css' }); 
    res.write(homeCss); 
    res.end();
    } 
    // logo svg
    else if(req.url === '/logo.svg')
        {
            res.writeHead(200, { 'Content-Type': 'image/svg+xml' }); 
        res.write(homeLogo); 
        res.end();
        } 
        // Logic for button toggle
        else if(req.url === '/browser-app.js')
            {
                res.writeHead(200, { 'Content-Type': 'text/javascript' }); 
            res.write(homeLogic); 
            res.end();
            } 
    // About Page
    else if(req.url === '/about')
        {
            res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<h2>ABOUT PAGE</h2>'); 
        res.end();
        } 
    else{
    res.writeHead(404, { 'Content-Type': 'text/html' }); 
    res.write('<h2>PAGE NOT FOUND!</h2>'); 
    res.end();
    }

res.end()

    // console.log('User hit the server');
    // console.log(req.method)
    // console.log(req.url)
    // res.writeHead(200, { 'Content-Type': 'text/html' }); // Change to text/html
    // res.write('<h2>HOME PAGE</h2>'); // Fix incorrect closing tag
    // res.end();
});
server.listen(5000)