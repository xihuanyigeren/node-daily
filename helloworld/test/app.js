'use strict'

import test from 'ava'
import supertest from 'supertest'
import koa from '../app'

const app = koa.callback()

test.cb('GET /',t=>{
    supertest(app)
        .get('/')
        .expect(200,(err,res)=>{
            // t.ifError(err)
            if(t.err)throw err
            let userId = res.body.id
            t.regex(res.text,/Hello Koa/,'res.test == Hello Koa')
            t.end()
        
    })
})