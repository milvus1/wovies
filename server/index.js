var app = module.exports = require('./app');

// load the routes
require('./routes');

var port = process.env.PORT || 8765;

app.listen(port);

console.log('app listening on port ' + port + '.');