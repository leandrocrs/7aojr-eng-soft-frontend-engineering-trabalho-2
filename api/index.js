import server from './server.js';

server.on('error', (error) => {
    console.error('Error starting server:', error);
});