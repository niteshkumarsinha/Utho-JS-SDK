const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function databaseExample() {
    try {
        console.log('Listing databases...');
        const dbs = await utho.database.list();
        console.log('Databases:', JSON.stringify(dbs, null, 2));

        if (dbs.data && dbs.data.length > 0) {
            const clusterId = dbs.data[0].id;
            console.log(`\nListing databases in cluster ${clusterId}...`);
            const databases = await utho.database.listDatabases(clusterId);
            console.log('Databases in cluster:', JSON.stringify(databases, null, 2));

            console.log(`\nListing users in cluster ${clusterId}...`);
            const users = await utho.database.listUsers(clusterId);
            console.log('Users in cluster:', JSON.stringify(users, null, 2));
        }

        // Create a database
        /*
        await utho.database.create({
            name: 'test-db',
            engine: 'mysql',
            dcslug: 'in-mumbai-1'
        });
        */

    } catch (error) {
        console.error('Error:', error.message);
    }
}

databaseExample();
