/**
 * WAF Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const wafs = await utho.waf.list();
        console.log('WAF Instances found:', wafs.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const WAFService = require('../packages/waf/src/index');

const client = new Client('YOUR_API_KEY');
const waf = new WAFService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const wafs = await waf.list();
        console.log('WAF Instances found:', wafs.length);

        // Example: Create WAF
        /*
        await waf.create({
            name: 'app-firewall',
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
