const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function cloudserverExample() {
    try {
        console.log('Listing cloud servers...');
        const servers = await utho.cloudserver.list();
        console.log('Cloud Servers:', JSON.stringify(servers, null, 2));

        // Get specific cloud server info
        // const details = await utho.cloudserver.get('in-mumbai-1', 'cloud-id');

        // Deploy a cloud server
        // const deployResponse = await utho.cloudserver.deploy({
        //     dcslug: 'in-mumbai-1',
        //     planid: '1',
        //     imageid: '1',
        //     hostname: 'my-new-server'
        // });

        // Control a cloud server
        // await utho.cloudserver.control('in-mumbai-1', 'cloud-id', 'poweron');

    } catch (error) {
        console.error('Error:', error.message);
    }
}

cloudserverExample();
