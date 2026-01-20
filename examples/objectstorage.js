/**
 * Object Storage Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const buckets = await utho.objectstorage.listBuckets('in-mumbai-1');
        console.log('Buckets:', buckets);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
// In a real project: require('@utho/sdk-core') and require('@utho/sdk-objectstorage')
const Client = require('../packages/core/src/index');
const ObjectStorageService = require('../packages/objectstorage/src/index');

const client = new Client('YOUR_API_KEY');
const objectStorage = new ObjectStorageService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');

        // 1. List Plans
        const plans = await objectStorage.getPlans();
        console.log('Plans available:', plans.length);

        // 2. List Buckets
        const buckets = await objectStorage.listBuckets('in-mumbai-1');
        console.log('Buckets in Mumbai:', buckets);

        if (buckets.length > 0) {
            const bucketName = buckets[0].name;

            // 3. Get Details
            const details = await objectStorage.getBucketDetails('in-mumbai-1', bucketName);
            console.log(`Details for ${bucketName}:`, details);

            // 4. Get Sharable URL
            const url = await objectStorage.getSharableUrl('in-mumbai-1', bucketName);
            console.log('Sharable URL:', url);
        }

        // 5. List Access Keys
        const keys = await objectStorage.listAccessKeys('in-mumbai-1');
        console.log('Access Keys:', keys);

    } catch (error) {
        console.error('Modular error:', error.message);
    }
}

async function run() {
    await monolithicExample();
    await modularExample();
}

run();
