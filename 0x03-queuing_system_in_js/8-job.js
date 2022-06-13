const createPushNotificationsJobs = (jobs, queue) => {
  if (! Array.isArray(jobs)) {
    throw Error('Jobs is not an array');
  }
  jobs.forEach(Job => {
    let job = queue.create('push_notification_code_3', Job);
    job.on('complete', () => console.log(`Notification job ${job.id} completed`));
    job.on('failed', error => console.log(`Notification job ${job.id} failed: ${error}`));
    job.on('progress', progress => console.log(`Notification job ${job.id} ${progress}% complete`));
    job.save((err) => {
      if (! err) {
        console.log(`Notification job created: ${job.id}`);
      }
    });
  });
};

module.exports = createPushNotificationsJobs;
