/**
 * Load Balancer Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const lbs = await utho.loadbalancer.list();
        console.log('Load Balancers found:', lbs.data?.length || 0);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const LoadBalancerService = require('../packages/loadbalancer/src/index');

const client = new Client('YOUR_API_KEY');
const lb = new LoadBalancerService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');

        // 1. List Load Balancers
        const lbs = await lb.list();
        console.log('Load Balancers found:', lbs.data?.length || 0);

        if (lbs.data && lbs.data.length > 0) {
            const lbId = lbs.data[0].id;

            // 2. Get Details
            const details = await lb.get(lbId);
            console.log(`LB name:`, details.data?.name);

            // 3. Add Frontend
            // await lb.addFrontend(lbId, { port: 80, protocol: 'http' });
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
