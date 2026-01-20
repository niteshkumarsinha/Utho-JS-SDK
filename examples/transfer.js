/**
 * Resource Transfer Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        // Initiate transfer
        // await utho.transfer.initiate('cloud', 'server-123');
        console.log('Transfer initiated (monolithic)');
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const TransferService = require('../packages/transfer/src/index');

const client = new Client('YOUR_API_KEY');
const transfer = new TransferService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        // Initiate transfer
        // await transfer.initiate('cloud', 'server-123');
        console.log('Transfer initiated (modular)');

        // Receive transfer
        /*
        await transfer.receive({
            id: 'server-123',
            token: 'xxxx-xxxx-xxxx',
            type: 'cloud'
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
