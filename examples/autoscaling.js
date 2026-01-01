const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function autoscalingExample() {
    try {
        console.log('Listing autoscaling groups...');
        const groups = await utho.autoscaling.list();
        console.log('Autoscaling Groups:', JSON.stringify(groups, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

autoscalingExample();
