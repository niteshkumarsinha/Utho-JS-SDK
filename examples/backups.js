const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function backupsExample() {
    try {
        console.log('Listing backups...');
        const backups = await utho.backups.list();
        console.log('Backups:', JSON.stringify(backups, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

backupsExample();
