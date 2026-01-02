const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function vpcExample() {
    try {
        console.log('Listing VPCs...');
        const vpcs = await utho.vpc.list();
        console.log('VPCs:', JSON.stringify(vpcs, null, 2));

        console.log('\nListing Subnets...');
        const subnets = await utho.vpc.listSubnets();
        console.log('Subnets:', JSON.stringify(subnets, null, 2));

        console.log('\nListing Elastic IPs...');
        const eips = await utho.vpc.listElasticIPs();
        console.log('Elastic IPs:', JSON.stringify(eips, null, 2));

        console.log('\nListing NAT Gateways...');
        const nats = await utho.vpc.listNATGateways();
        console.log('NAT Gateways:', JSON.stringify(nats, null, 2));

        // Create a VPC
        /*
        const createResponse = await utho.vpc.create({
            name: 'test-vpc',
            dcslug: 'in-mumbai-1',
            cidr: '10.0.0.0/16'
        });
        */

    } catch (error) {
        console.error('Error:', error.message);
    }
}

vpcExample();
