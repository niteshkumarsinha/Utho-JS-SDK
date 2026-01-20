/**
 * Networking Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const domains = await utho.networking.listDomains();
        console.log('Domains found:', domains.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const NetworkingService = require('../packages/networking/src/index');

const client = new Client('YOUR_API_KEY');
const networking = new NetworkingService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');

        // 1. List Domains
        const domains = await networking.listDomains();
        console.log('Domains found:', domains.length);

        if (domains.length > 0) {
            const domainName = domains[0].domain;

            // 2. Get Domain Details
            const details = await networking.getDomain(domainName);
            console.log(`Domain ${domainName} records:`, details.length);
        }

        // 3. List Firewalls
        const firewalls = await networking.listFirewalls();
        console.log('Firewalls found:', firewalls.length);

    } catch (error) {
        console.error('Modular error:', error.message);
    }
}

async function run() {
    await monolithicExample();
    await modularExample();
}

run();
