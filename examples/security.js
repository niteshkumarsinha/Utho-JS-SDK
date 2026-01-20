/**
 * Security Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const keys = await utho.security.listSSHKeys();
        console.log('SSH Keys found:', keys.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const SecurityService = require('../packages/security/src/index');

const client = new Client('YOUR_API_KEY');
const security = new SecurityService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');

        // 1. List SSH Keys
        const keys = await security.listSSHKeys();
        console.log('SSH Keys found:', keys.length);

        // 2. List API Keys
        const apiKeys = await security.listAPIKeys();
        console.log('API Keys found:', apiKeys.length);

        // Example: Import SSH Key
        /*
        await security.importSSHKey({
            name: 'my-laptop',
            public_key: 'ssh-rsa AAAAB3N...'
        });
        */
    } catch (error) {
        console.error('Modular error:', error.message);
    }
}

async function run() {
    await monolithicExample();
    await modularExample();
}

run();
