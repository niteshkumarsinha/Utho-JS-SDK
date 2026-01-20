/**
 * Stacks Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const stacks = await utho.stacks.list();
        console.log('Stacks found:', stacks.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const StacksService = require('../packages/stacks/src/index');

const client = new Client('YOUR_API_KEY');
const stacksService = new StacksService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const list = await stacksService.list();
        console.log('Stacks found:', list.length);

        // Example: Create stack
        /*
        await stacksService.create({
            title: 'My Automation Stack',
            script: '#!/bin/bash\napt update'
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
