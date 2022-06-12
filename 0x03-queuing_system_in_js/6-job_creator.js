import { createClient, print } from 'redis';
import { createQueue } from 'kue';

const myClient  = createClient();
const queue = createQueue();

myClient.on('error', (error) => console.log(`Redis client not connected to the server: ${error}`));
myClient.on('connect', () => console.log('Redis client connected to the server'));

const myObject = {
	  phoneNumber: '123456789',
	  message: 'Hello All'
};
const myJob = queue.create('push_notification_code', myObject).save((error) => {
	if (!error) {
		console.log(`Notification job created: ${myJob.id}`);
	}
});

myJob.on('complete', () => console.log('Notification job completed'));
myJob.on('failed', () => console.log('Notification job failed'));
