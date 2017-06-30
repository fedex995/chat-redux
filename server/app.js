const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const helmet = require('helmet');
const session = require('express-session');
const LevelStore = require('level-session-store')(session);
const logger = require('./logger');
const chat = require('./chat');

const env = process.env.NODE_ENV || 'development';
const app = express();
const server = http.createServer(app);

const io = socketIo(server, {});
chat.init(io);

app.use(helmet());

const sessionMiddleware = session({
  resave: true,
  saveUninitialized: true,
  cookie: { secure: env !== 'development' }
});

app.use(sessionMiddleware);

// copies express sessions to socket-io
io.use((socket, next) => sessionMiddleware(socket.request, socket.request.res, next));
// saves having to type "socket.request.session.user" everywhere
io.use((socket, next) => {
  if (socket.request.session.user) {
    socket.user = Object.assign({}, socket.request.session.user)
  }
  return next()
});

app.use(express.static('public')); // for serving the client

app.use((err, req, res, next) => {
  logger.error({ err });
  if (!res.headersSent) {
    res.status(500).send()
  }
});

function onError (err) {
  logger.error(err);
  process.exit(1)
}

server.listen(3000, "localhost", (err) => {
  if (err) {
    return onError(err)
  }
  logger.info(`Server listening on localhost:3000`)
});

process.on('uncaughtException', onError);
