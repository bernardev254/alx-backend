import { createClient, print } from 'redis';

const client = createClient();
client.on('error', (error) => console.log(`Redis client not connected to the server: ${error}`));
client.on('connect',() => {
  console.log('Redis client connected to the server');
});

const displaySchoolValue = (schoolName) => {
  client.get(schoolName,(e, res) => {
    if (e) {
      console.log(e);
      throw error;
  }
  console.log(res);
  });
}

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, print);
}
  

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
