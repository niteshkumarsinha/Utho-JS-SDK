/**
 * VPN Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const vpns = await utho.vpn.list();
        console.log('VPNs found:', vpns.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const VPNService = require('../packages/vpn/src/index');

const client = new Client('YOUR_API_KEY');
const vpn = new VPNService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const vpns = await vpn.list();
        console.log('VPNs found:', vpns.length);

        // Example: Create VPN
        /*
        await vpn.create({
            name: 'my-remote-vpn',
            dcslug: 'in-mumbai-1',
            plan: 'small'
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
