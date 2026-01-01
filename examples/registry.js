const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function registryExample() {
    try {
        console.log('Listing container registries...');
        const registries = await utho.registry.list();
        console.log('Registries:', JSON.stringify(registries, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

registryExample();
