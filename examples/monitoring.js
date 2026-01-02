const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function monitoringExample() {
    try {
        console.log('Listing Monitoring Contacts...');
        const contacts = await utho.monitoring.listContacts();
        console.log('Contacts:', JSON.stringify(contacts, null, 2));

        console.log('\nListing Monitoring Alerts...');
        const alerts = await utho.monitoring.listAlerts();
        console.log('Alerts:', JSON.stringify(alerts, null, 2));

        // Add a contact
        /*
        await utho.monitoring.addContact({
            name: 'DevOps Team',
            email: 'devops@example.com',
            mobile: '1234567890',
            type: 'email'
        });
        */
    } catch (error) {
        console.error('Error:', error.message);
    }
}

monitoringExample();
