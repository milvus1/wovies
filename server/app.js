var koa = require('koa');
var resolve = require('path').resolve;
var app = koa();

app.use(function *(){
    this.body = 'Hello World';
});

var app = module.exports = koa();

// resolve the root directly
var root = resolve(__dirname, '..');