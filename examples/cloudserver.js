/**
 * Cloud Server Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const servers = await utho.cloudserver.list();
        console.log('Servers:', servers.data?.length || 0);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const CloudServerService = require('../packages/cloudserver/src/index');

const client = new Client('YOUR_API_KEY');
const cloudServer = new CloudServerService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');

        // 1. List Servers
        const servers = await cloudServer.list();
        console.log('Servers found:', servers.data?.length || 0);

        if (servers.data && servers.data.length > 0) {
            const serverId = servers.data[0].id;

            // 2. Get Details
            const details = await cloudServer.get(serverId);
            console.log(`Details for server ${serverId}:`, details.data?.hostname);

            // 3. Power Control
            // await cloudServer.control(serverId, 'poweron');
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
