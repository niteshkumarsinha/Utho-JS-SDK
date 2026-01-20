/**
 * Account Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const info = await utho.account.getInfo();
        console.log('Account Info:', info);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const AccountService = require('../packages/account/src/index');

const client = new Client('YOUR_API_KEY');
const account = new AccountService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const info = await account.getInfo();
        console.log('Account Info:', info);
    } catch (error) {
        console.error('Modular error:', error.message);
    }
}

async function run() {
    await monolithicExample();
    await modularExample();
}

run();
