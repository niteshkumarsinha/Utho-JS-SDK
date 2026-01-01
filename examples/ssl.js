const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function sslExample() {
    try {
        console.log('Listing SSL certificates...');
        const certs = await utho.ssl.list();
        console.log('SSL Certificates:', JSON.stringify(certs, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

sslExample();
