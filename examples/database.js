const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function databaseExample() {
    try {
        console.log('Listing databases...');
        const dbs = await utho.database.list();
        console.log('Databases:', JSON.stringify(dbs, null, 2));

        // Create a database
        // await utho.database.create({
        //     name: 'test-db',
        //     engine: 'mysql',
        //     dcslug: 'in-mumbai-1'
        // });

    } catch (error) {
        console.error('Error:', error.message);
    }
}

databaseExample();
