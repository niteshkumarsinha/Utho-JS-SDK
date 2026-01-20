/**
 * Actions Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const actions = await utho.actions.list();
        console.log('Actions found:', actions.data?.length || 0);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const ActionsService = require('../packages/actions/src/index');

const client = new Client('YOUR_API_KEY');
const actionsService = new ActionsService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');

        // 1. List Actions
        const actions = await actionsService.list();
        console.log('Actions found:', actions.data?.length || 0);

        if (actions.data && actions.data.length > 0) {
            const actionId = actions.data[0].id;

            // 2. Get Single Action
            const details = await actionsService.get(actionId);
            console.log(`Details for action ${actionId}:`, details.data?.status);
        }

    } catch (error) {
        console.error('Modular error:', error.message);
    }
}

async function run() {
    await monolithicExample();
    await modularExample();
}

run();
