const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('message', (msg) => console.log(msg));
emitter.emit('message', 'Hello Event!')