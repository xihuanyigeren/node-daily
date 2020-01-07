
const Koa = require('koa');
const app = new Koa();
const sleep = ms => new Promise(r=>setTimeout(r,ms))

app.use(require('koa-bigpipe'));

app.use(ctx =>{
    // ctx.body = 'Hello Koa'
    ctx.write('loading ....<br>');
    return sleep(2000).then(function(){
        ctx.write('timer:2000ms <br>')
        return sleep(5000)
    }).then(function(){
        ctx.write('timer:5000ms <br>')

    }).then(function(){
        ctx.end()
    })
})

//async/await 

// app.use(async ctx =>{
//     // ctx.body = 'Hello Koa'
//     ctx.write('loading ....<br>');
//     await sleep(2000);
//     ctx.write('timer:2000ms <br>');
//     await sleep(5000);
//     ctx.write('timer:5000ms <br>');
//     ctx.end();
// })

app.listen(3000)