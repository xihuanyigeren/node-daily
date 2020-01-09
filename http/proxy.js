const http = require('http')

const app = http.createServer((req,res)=>{
    if('/test'===req.url){
        res.writeHead(200,{'Context-Type':'text/plain'})
        res.end('hello node.js in remote page \n')
    }else{
        console.log('进入代理方法')
        proxy(req,res)
    }
})

function proxy(req,res){
    let options = {
        host: req.host,
        port: 3000,
        headers: req.headers,
        path: '/test',
        agent: false,
        method: 'GET'   
    }

    let httpProxy = http.request(options,(respose)=>{
        respose.pipe(res)
    })

    req.pipe(httpProxy)

}

app.listen(3000,function(){
    const PORT = app.address().port;
    console.log(`server is running at http://127.0.0.1:${PORT}`)
})