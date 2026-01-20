/**
 * Target Group Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const groups = await utho.targetgroup.list();
        console.log('Target Groups found:', groups.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const TargetGroupService = require('../packages/targetgroup/src/index');

const client = new Client('YOUR_API_KEY');
const targetGroup = new TargetGroupService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const groups = await targetGroup.list();
        console.log('Target Groups found:', groups.length);

        // Example: Create target group
        /*
        await targetGroup.create({
            name: 'api-targets',
            dcslug: 'in-mumbai-1',
            protocol: 'http',
            port: 80
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
