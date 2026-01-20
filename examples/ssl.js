/**
 * SSL Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const certs = await utho.ssl.list();
        console.log('Certificates found:', certs.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const SSLService = require('../packages/ssl/src/index');

const client = new Client('YOUR_API_KEY');
const ssl = new SSLService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const certs = await ssl.list();
        console.log('Certificates found:', certs.length);

        // Example: Create certificate
        /*
        await ssl.create({
            name: 'my-site-cert',
            dcslug: 'in-mumbai-1'
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
