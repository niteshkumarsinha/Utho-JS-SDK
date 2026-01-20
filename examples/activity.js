/**
 * Activity Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const logs = await utho.activity.list();
        console.log('Activity Logs:', logs.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const ActivityService = require('../packages/activity/src/index');

const client = new Client('YOUR_API_KEY');
const activity = new ActivityService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const logs = await activity.list();
        console.log('Activity Logs:', logs.length);
    } catch (error) {
        console.error('Modular error:', error.message);
    }
}

async function run() {
    await monolithicExample();
    await modularExample();
}

run();
