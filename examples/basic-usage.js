const Utho = require('../src');

// Replace with your actual API key
const apiKey = 'YOUR_API_KEY';

async function main() {
    const utho = Utho.create(apiKey);

    console.log('--- Utho SDK Example ---');

    try {
        // 1. Get Account Info
        console.log('\n1. Fetching Account Info...');
        const accountInfo = await utho.account.getInfo();
        console.log('Account Info:', JSON.stringify(accountInfo, null, 2));

        // 2. List Cloud Servers
        console.log('\n2. Listing Cloud Servers...');
        const servers = await utho.cloudserver.list();
        console.log('Servers:', JSON.stringify(servers, null, 2));

        // 3. List ISOs
        console.log('\n3. Listing ISOs...');
        const isos = await utho.iso.list();
        console.log('ISOs:', JSON.stringify(isos, null, 2));

    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
