import io from 'socket.io-client';

export const connect = () => {
  const socket = io.connect('http://127.0.0.1:3000');
  return socket;
}