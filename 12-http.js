const http = require('http');
const server=http.createServer((req,res)=>{
    //console.log(req)
    if(req.url==='/'){
        res.end('Welcome to home page');
    }
    if(req.url==='/about'){
        res.end('This is the about page');
    }
    else{
    res.end(`
    <h1>OOPS!</h1>
    <a href="/">back home</a>`)}

})

server.listen(5000)