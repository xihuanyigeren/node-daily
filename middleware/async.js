
const Koa = require('koa');
const app = new Koa();


app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  })
app.use(ctx=>{
    ctx.body = 'HELLO KOA2';
})
app.listen(3000);