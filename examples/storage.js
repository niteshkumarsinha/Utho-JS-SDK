const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function storageExample() {
    try {
        console.log('Listing EBS Volumes...');
        const volumes = await utho.storage.list();
        console.log('EBS Volumes:', JSON.stringify(volumes, null, 2));

        // Create an EBS volume
        // const createResponse = await utho.storage.create({
        //     name: 'my-ebs-volume',
        //     dcslug: 'in-mumbai-1',
        //     disk: '50',
        //     disk_type: 'ssd'
        // });
        // console.log('Created:', createResponse);

        // Attach EBS to a server
        // await utho.storage.attach('ebs-id', {
        //     serverid: 'server-id'
        // });

        // Detach EBS from server
        // await utho.storage.detach('ebs-id');

        // Delete EBS volume
        // await utho.storage.delete('ebs-id');

    } catch (error) {
        console.error('Error:', error.message);
    }
}

storageExample();
