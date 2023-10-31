const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient({
    host: 'localhost', // or your Redis server IP
    port: 6379 // or your Redis server port
});

client.on('error', (err) => {
    console.log(`Error: ${err}`);
});

client.incr = promisify(client.incr).bind(client);
client.expire = promisify(client.expire).bind(client);

module.exports = client;

