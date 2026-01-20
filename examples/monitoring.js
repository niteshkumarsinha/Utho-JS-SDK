/**
 * Monitoring Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const alerts = await utho.monitoring.listAlerts();
        console.log('Alert Policies found:', alerts.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const MonitoringService = require('../packages/monitoring/src/index');

const client = new Client('YOUR_API_KEY');
const monitoring = new MonitoringService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');

        // 1. List Contacts
        const contacts = await monitoring.listContacts();
        console.log('Contacts found:', contacts.length);

        // 2. List Alerts
        const alerts = await monitoring.listAlerts();
        console.log('Alerts found:', alerts.length);

        // Example: Add Contact
        /*
        await monitoring.addContact({
            name: 'Alert Team',
            email: 'alerts@example.com'
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
