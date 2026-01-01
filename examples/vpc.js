const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function vpcExample() {
    try {
        console.log('Listing VPCs...');
        const vpcs = await utho.vpc.list();
        console.log('VPCs:', JSON.stringify(vpcs, null, 2));

        // Create a VPC
        // const createResponse = await utho.vpc.create({
        //     name: 'test-vpc',
        //     dcslug: 'in-mumbai-1',
        //     cidr: '10.0.0.0/16'
        // });

    } catch (error) {
        console.error('Error:', error.message);
    }
}

vpcExample();
