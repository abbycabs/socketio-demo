var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(9002);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function(socket) {
  socket.on('new input', function(msg) {
    io.sockets.emit('new message', msg );
  });
});
