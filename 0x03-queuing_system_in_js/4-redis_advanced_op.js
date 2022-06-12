import { createClient, print } from 'redis';

const client = createClient();

client.on('error', (error) => console.log(`Redis client not connected to the server: ${error}`));
client.on('connect', () => console.log('Redis client connected to the server'));

const key = 'HolbertonSchiools';

client.hset(key, "Portland", 50, print);
client.hset(key, "Seattle", 80, print);
client.hset(key, "New York", 20, print);
client.hset(key, "Bogota", 20, print);
client.hset(key, "Cali", 40, print);
client.hset(key, "Paris", 2, print);

client.hgetall(key, (err, res) => {
  if (!err) {
    console.log(res);
  }
  else {
    console.log(err);
    throw error;
  }
});
