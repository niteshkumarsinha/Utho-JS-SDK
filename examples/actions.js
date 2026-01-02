const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function actionsExample() {
    try {
        console.log('Listing Historical Actions...');
        const actions = await utho.actions.list();
        console.log('Actions:', JSON.stringify(actions, null, 2));

        if (actions.data && actions.data.length > 0) {
            const actionId = actions.data[0].id;
            console.log(`\nGetting details for Action ID: ${actionId}...`);
            const actionDetails = await utho.actions.get(actionId);
            console.log('Action Details:', JSON.stringify(actionDetails, null, 2));
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
}

actionsExample();
