/**
 * Autoscaling Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const groups = await utho.autoscaling.list();
        console.log('Autoscaling Groups:', groups.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const AutoscalingService = require('../packages/autoscaling/src/index');

const client = new Client('YOUR_API_KEY');
const autoscaling = new AutoscalingService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const groups = await autoscaling.list();
        console.log('Autoscaling Groups:', groups.length);

        // Example: Create group (commented out)
        /*
        await autoscaling.create({
            name: 'web-asg',
            min_size: 2,
            max_size: 10,
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
