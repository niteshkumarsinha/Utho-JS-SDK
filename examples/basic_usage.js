const Utho = require('../src/index');

// Replace with your actual API Key
const apiKey = 'YOUR_SECRET_API_KEY';

const utho = new Utho(apiKey);

async function main() {
    try {
        console.log('Fetching account information...');
        const profile = await utho.account.getProfile();
        console.log('Account Profile:', JSON.stringify(profile, null, 2));

        console.log('\nListing cloud servers...');
        const servers = await utho.cloudserver.list();
        console.log('Cloud Servers:', JSON.stringify(servers, null, 2));

        console.log('\nListing VPCs...');
        const vpcs = await utho.vpc.list();
        console.log('VPCs:', JSON.stringify(vpcs, null, 2));

    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
