const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function accountExample() {
    try {
        console.log('Fetching account info...');
        const info = await utho.account.getInfo();
        console.log('Account Info:', JSON.stringify(info, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

accountExample();
