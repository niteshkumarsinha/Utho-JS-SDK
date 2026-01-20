/**
 * IpSec Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const connections = await utho.ipsec.list();
        console.log('Connections:', connections.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const IpSecService = require('../packages/ipsec/src/index');

const client = new Client('YOUR_API_KEY');
const ipsec = new IpSecService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const connections = await ipsec.list();
        console.log('Connections found:', connections.length);

        // Example: Create connection (commented out)
        /*
        await ipsec.create({
            name: 'office-vpn',
            dcslug: 'in-mumbai-1',
            remote_gateway: '1.2.3.4'
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
