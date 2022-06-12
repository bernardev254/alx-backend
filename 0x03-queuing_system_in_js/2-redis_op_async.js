import { createClient, print } from 'redis';
import { promisify } from 'util';

const client = createClient();
client.on('error', (error) => console.log(`Redis client not connected to the server: ${error}`));
client.on('connect',() => {
  console.log('Redis client connected to the server');
});
const myGet = promisify(client.get).bind(client);

const displaySchoolValue = async (schoolName) => {
  const res = await myGet(schoolName).catch((error) => {
    if (error) {
      console.log(error);
      throw error;
  }
  });
  console.log(res);
}

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, print);
}
  

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
