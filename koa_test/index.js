const Koa = require('koa')
const app = new Koa()

app.use(async ctx =>{


    return ctx.body = {
        herf: ctx.herf,
        path: ctx.path,
        url: ctx.url,
        query: ctx.query,
        querystring: ctx.querystring,
        search: ctx.querystring,
        host: ctx.host,
        hostname: ctx.hostname,
        protocol: ctx.protocol,
        secure: ctx.secure,
        subdomains: ctx.subdomains,
        origin: ctx.origin
    }
})
//      http://127.0.0.1:3000/site/test.htm?a=1&b=2#abc
// {
//     "path": "/site/test.htm",
//     "url": "/site/test.htm?a=1&b=2",
//     "query": {
//         "a": "1",
//         "b": "2"
//     },
//     "querystring": "a=1&b=2",
//     "search": "a=1&b=2",
//     "host": "127.0.0.1:3000",
//     "hostname": "127.0.0.1",
//     "protocol": "http",
//     "secure": false,
//     "subdomains": [],
//     "origin": "http://127.0.0.1:3000"
// }

app.listen(3000)