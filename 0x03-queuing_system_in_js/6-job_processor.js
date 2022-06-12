import { createClient, print } from 'redis';
import { createQueue } from 'kue';

const myClient  = createClient();
const queue = createQueue();

myClient.on('error', (error) => console.log(`Redis client not connected to the server: ${error}`));
myClient.on('connect', () => console.log('Redis client connected to the server'));

const sendNotification = (phoneNumber, message) => {
	console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
};

const processor = queue.process('push_notification_code', (job, done) => {
	sendNotification(job.data.phoneNumber, job.data.message);
	done();
});

