var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

function* generateValues(prev = 0, next = 1) {
  while (true) {
    yield prev;
    yield* generateValues(next, prev + next);
  }
}


io.on('connection', function (socket) {

  var fib = generateValues();

  setInterval(function () {
    io.emit('infosys', 12.5 + 3 * fib.next().value);
    io.emit('l&t', 22.5 + 2 * fib.next().value);
    io.emit('mobiquity', 8133332.5 - fib.next().value);
    io.emit('capacite', 912.5 / fib.next().value);
    io.emit('tcs', 1443333.5 + fib.next().value);
  }, 3000);

});

http.listen(port, function () {
  console.log('listening on *:' + port);
});