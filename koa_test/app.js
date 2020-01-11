function test(url,originalUrl){
    return {
        url: url,
        originalUrl: originalUrl
    }
}
const testUrl = 'https://127.0.0.1:8080/site/test.htm?a=1&b=2#abc';
const req= test(testUrl);
const url = require('parseurl')(req)
console.log(url)