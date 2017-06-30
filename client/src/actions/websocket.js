import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io('http://localhost:3001');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

export default socketIoMiddleware;