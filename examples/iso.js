const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function isoExample() {
    try {
        console.log('Listing ISO images...');
        const isos = await utho.iso.list();
        console.log('ISO Images:', JSON.stringify(isos, null, 2));

        // Add an ISO
        // await utho.iso.add({ name: 'my-iso', url: 'https://example.com/disk.iso' });

    } catch (error) {
        console.error('Error:', error.message);
    }
}

isoExample();
