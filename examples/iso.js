/**
 * ISO Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const isos = await utho.iso.list();
        console.log('ISO Images:', isos.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const ISOService = require('../packages/iso/src/index');

const client = new Client('YOUR_API_KEY');
const iso = new ISOService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const isos = await iso.list();
        console.log('ISO Images found:', isos.length);

        // Example: Add ISO (commented out)
        /*
        await iso.add({
            name: 'ubuntu-custom',
            url: 'https://example.com/custom.iso'
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
