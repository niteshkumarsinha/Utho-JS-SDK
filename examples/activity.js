const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function activityExample() {
    try {
        console.log('Listing Account Activity Logs...');
        const activity = await utho.activity.list();
        console.log('Activity Logs:', JSON.stringify(activity, null, 2));

    } catch (error) {
        console.error('Error:', error.message);
    }
}

activityExample();
