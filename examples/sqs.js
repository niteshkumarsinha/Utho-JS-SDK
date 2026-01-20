/**
 * SQS Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const queues = await utho.sqs.list();
        console.log('Queues found:', queues.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const SQSService = require('../packages/sqs/src/index');

const client = new Client('YOUR_API_KEY');
const sqs = new SQSService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const queues = await sqs.list();
        console.log('SQS Queues found:', queues.length);

        // Example: Create queue
        /*
        await sqs.create({
            name: 'my-queue',
            dcslug: 'in-mumbai-1'
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
