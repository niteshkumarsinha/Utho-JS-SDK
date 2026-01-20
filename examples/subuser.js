/**
 * Sub-Users Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const users = await utho.subuser.list();
        console.log('Sub-users found:', users.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const SubUserService = require('../packages/subuser/src/index');

const client = new Client('YOUR_API_KEY');
const subuser = new SubUserService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');

        // 1. List Sub-users
        const users = await subuser.list();
        console.log('Sub-users found:', users.length);

        if (users.length > 0) {
            const userId = users[0].id;

            // 2. Get Details
            const details = await subuser.get(userId);
            console.log(`User email:`, details.email);

            // 3. Update User
            // await subuser.update(userId, { firstname: 'John' });
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
