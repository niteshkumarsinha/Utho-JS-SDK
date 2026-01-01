const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function securityExample() {
    try {
        console.log('Listing SSH keys...');
        const keys = await utho.security.listSSHKeys();
        console.log('SSH Keys:', JSON.stringify(keys, null, 2));

        console.log('\nListing API keys...');
        const apiKeys = await utho.security.listAPIKeys();
        console.log('API Keys:', JSON.stringify(apiKeys, null, 2));

        // Import an SSH key
        // await utho.security.importSSHKey({
        //     name: 'my-ssh-key',
        //     public_key: 'ssh-rsa AAAAB3N...'
        // });

    } catch (error) {
        console.error('Error:', error.message);
    }
}

securityExample();
