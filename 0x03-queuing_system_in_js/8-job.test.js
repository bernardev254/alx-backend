import createPushNotificationsJobs from './8-job.js';
import { assert, expect } from 'chai';
import { createQueue } from 'kue';

const queue = createQueue();


describe('createPushNotificationsJobs', () => {
	before(() => queue.testMode.enter());
	afterEach(() => queue.testMode.clear());
	after(() => queue.testMode.exit());

	it('display a error message if jobs is not an array', () => {
		expect(() => createPushNotificationsJobs(job, queue).to.throw(Error, 'Jobs is not an array'));
		});
	it('create two new jobs to the queue', () => {
		let jobs = [
			{"phoneNumber": "123456789",
			 "message": "hello there"},
			{"phoneNumber": "987654321",
			 "message": "Hello Again"}
		];
		createPushNotificationsJobs(jobs, queue);
		assert.equal(queue.testMode.jobs.length, 2);
	});
});		
