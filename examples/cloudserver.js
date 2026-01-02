const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function cloudserverExample() {
    try {
        console.log('Listing cloud servers...');
        const servers = await utho.cloudserver.list();
        console.log('Cloud Servers:', JSON.stringify(servers, null, 2));

        if (servers.data && servers.data.length > 0) {
            const server = servers.data[0];
            const cloudId = server.id;

            console.log(`\nCreating Snapshot for Server ${cloudId}...`);
            // await utho.cloudserver.createSnapshot(cloudId);

            console.log(`\nManaging Public IPs for Server ${cloudId}...`);
            // await utho.cloudserver.assignPublicIP(cloudId);

            console.log(`\nRescue mode control for Server ${cloudId}...`);
            // await utho.cloudserver.enableRescue(cloudId, { password: 'SecurePassword123' });
        }

        // Deploy a cloud server
        /*
        const deployResponse = await utho.cloudserver.deploy({
            dcslug: 'in-mumbai-1',
            planid: '1',
            imageid: '1',
            hostname: 'my-new-server'
        });
        */

    } catch (error) {
        console.error('Error:', error.message);
    }
}

cloudserverExample();
