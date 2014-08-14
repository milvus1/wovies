var app = require('../app.js');

app.use(function* (next) {
    if (this.request.path !== '/')
        return yield* next;

    this.response.body = 'Koa test';
});