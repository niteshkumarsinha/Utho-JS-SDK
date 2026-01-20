/**
 * Registry Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const registries = await utho.registry.list();
        console.log('Registries found:', registries.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const RegistryService = require('../packages/registry/src/index');

const client = new Client('YOUR_API_KEY');
const registry = new RegistryService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const registries = await registry.list();
        console.log('Registries found:', registries.length);

        // Example: Create registry
        /*
        await registry.create({
            name: 'my-app-images',
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
