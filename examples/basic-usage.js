/**
 * Basic Usage Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const accountInfo = await utho.account.getInfo();
        console.log('Account Info:', accountInfo);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const AccountService = require('../packages/account/src/index');
const CloudServerService = require('../packages/cloudserver/src/index');

const client = new Client('YOUR_API_KEY');
const account = new AccountService(client);
const cloudserver = new CloudServerService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');

        // 1. Get Account Info
        const info = await account.getInfo();
        console.log('Account Info:', info);

        // 2. List Cloud Servers
        const servers = await cloudserver.list();
        console.log('Servers found:', servers.data?.length || 0);

    } catch (error) {
        console.error('Modular error:', error.message);
    }
}

async function run() {
    await monolithicExample();
    await modularExample();
}

run();
