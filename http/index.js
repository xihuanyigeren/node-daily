const http = require('http')

const port = 3000

http.createServer((req,res)=>{
    console.log(`${req.method} ${req.url}`)

    res.writeHead(200,{'Context-Type':'text/plain'})
    res.end('Hello node.js \n')
}).listen(port)