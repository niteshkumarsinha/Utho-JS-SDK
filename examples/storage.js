/**
 * Storage (EBS) Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const volumes = await utho.storage.list();
        console.log('Volumes found:', volumes.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const StorageService = require('../packages/storage/src/index');

const client = new Client('YOUR_API_KEY');
const storage = new StorageService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const volumes = await storage.list();
        console.log('Volumes found:', volumes.length);

        if (volumes.length > 0) {
            const volumeId = volumes[0].id;
            // Example: Attach volume
            // await storage.attach(volumeId, { serverid: '123' });
        }
    } catch (error) {
        console.error('Modular error:', error.message);
    }
}

async function run() {
    await monolithicExample();
    await modularExample();
}

run();
