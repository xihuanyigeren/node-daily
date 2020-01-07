const Koa = require('koa');
const app = new Koa();

app.use((ctx,next)=>{
    const start = new Date()
    return next().then(()=>{
        const ms = new Date() -start
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)

    });
});

app.use(ctx=>{
    ctx.body = 'hello Koa2'
})

app.listen(3000)