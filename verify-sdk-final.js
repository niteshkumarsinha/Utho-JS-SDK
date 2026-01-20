const assert = require('assert');
const path = require('path');

async function testSDK() {
    console.log('--- Starting Final SDK Verification ---');

    try {
        // 1. Test Monolithic Compatibility Layer
        console.log('\n1. Testing Monolithic Compatibility Layer...');
        const Utho = require('./src/index');
        const utho = new Utho('TEST_KEY');
        
        assert.ok(utho.account, 'Account service should be accessible');
        assert.ok(utho.objectstorage, 'Object Storage service should be accessible');
        assert.ok(typeof utho.objectstorage.getPlans === 'function', 'New Object Storage methods should be present');
        console.log('✅ Monolithic layer functional and redirected');

        // 2. Test Core Client
        console.log('\n2. Testing Core Client Package...');
        const Client = require('./packages/core/src/index');
        const client = new Client('TEST_KEY');
        assert.strictEqual(client.apiKey, 'TEST_KEY', 'API key should be set in core client');
        console.log('✅ Core client functional');

        // 3. Test Modular Service Pattern
        console.log('\n3. Testing Modular Service Pattern...');
        const ObjectStorage = require('./packages/objectstorage/src/index');
        const osService = new ObjectStorage(client);
        assert.ok(typeof osService.listBuckets === 'function', 'Modular service should have standard methods');
        assert.ok(typeof osService.getPlans === 'function', 'Modular service should have new methods');
        console.log('✅ Modular service pattern functional');

        // 4. Test Workspace Structure
        console.log('\n4. Verifying Package JSONs...');
        const rootPkg = require('./package.json');
        assert.ok(rootPkg.workspaces, 'Workspaces should be defined in root package.json');
        assert.ok(rootPkg.workspaces.includes('packages/*'), 'Workspaces should include packages/*');
        console.log('✅ Workspace structure verified');

        console.log('\n--- Final Verification Passed! ---');
    } catch (error) {
        console.error('\n❌ Verification Failed:');
        console.error(error.stack);
        process.exit(1);
    }
}

testSDK();
