/**
 * Database Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const dbs = await utho.database.list();
        console.log('Clusters found:', dbs.data?.length || 0);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const DatabaseService = require('../packages/database/src/index');

const client = new Client('YOUR_API_KEY');
const database = new DatabaseService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');

        // 1. List Clusters
        const clusters = await database.list();
        console.log('Clusters found:', clusters.data?.length || 0);

        if (clusters.data && clusters.data.length > 0) {
            const clusterId = clusters.data[0].id;

            // 2. List databases in cluster
            const databases = await database.listDatabases(clusterId);
            console.log(`Databases in cluster ${clusterId}:`, databases.length);

            // 3. List users in cluster
            const users = await database.listUsers(clusterId);
            console.log(`Users in cluster ${clusterId}:`, users.length);
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
