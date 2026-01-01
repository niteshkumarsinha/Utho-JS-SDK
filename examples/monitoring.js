const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function monitoringExample() {
    try {
        console.log('Listing monitoring alert policies...');
        const policies = await utho.monitoring.listAlertPolicies();
        console.log('Alert Policies:', JSON.stringify(policies, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

monitoringExample();
