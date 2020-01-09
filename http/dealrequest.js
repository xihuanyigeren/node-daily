const http = require('http')

const app = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    res.writeHead(200, { 'Context-Type': 'text/plain' })
    res.end();
})


app.on('request', (request, response) => {
    if (request.url === '/test') {
        console.log('进入测试方法')
    }

})
app.listen(3000, function () {
    const PORT = app.address().port;
    console.log(`server is running at http://127.0.0.1:${PORT}`)
})