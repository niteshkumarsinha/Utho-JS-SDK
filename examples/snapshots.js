/**
 * Snapshots Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const snapshots = await utho.snapshots.list();
        console.log('Snapshots found:', snapshots.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const SnapshotsService = require('../packages/snapshots/src/index');

const client = new Client('YOUR_API_KEY');
const snapshots = new SnapshotsService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const list = await snapshots.list();
        console.log('Snapshots found:', list.length);

        // Example: Create snapshot
        /*
        await snapshots.create({
            serverid: '123',
            name: 'my-backup'
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
