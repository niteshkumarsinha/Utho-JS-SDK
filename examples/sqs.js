const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function sqsExample() {
    try {
        console.log('Listing SQS queues...');
        const queues = await utho.sqs.list();
        console.log('SQS Queues:', JSON.stringify(queues, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

sqsExample();
