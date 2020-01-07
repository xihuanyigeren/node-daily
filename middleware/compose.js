const co = require('co');
const compose = require('koa-compose')


function a(ctx,next){
    console.log("第一个中间件 before 1")
    next()
    console.log('第一个中间件 after 2')
  }
  function b(ctx,next){
    console.log("第二个中间件 before 3")
    next()
    console.log('第二个中间件 after 4')

  }
  function c(ctx,next){
    console.log("业务处理逻辑  ")
    next()
  }
  co(compose([a,b,c]))
