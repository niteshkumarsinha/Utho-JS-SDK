const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function networkingExample() {
    try {
        console.log('Listing DNS domains...');
        const domains = await utho.networking.listDomains();
        console.log('Domains:', JSON.stringify(domains, null, 2));

        console.log('\nListing firewalls...');
        const firewalls = await utho.networking.listFirewalls();
        console.log('Firewalls:', JSON.stringify(firewalls, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

networkingExample();
