import io from 'socket.io-client'

const socket = io("http://localhost:3000");

const init = () => {socket.on()};

const emit = () => {socket.emit()};

export {
  init,
  emit
}
