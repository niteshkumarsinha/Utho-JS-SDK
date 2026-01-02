const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function targetGroupExample() {
    try {
        console.log('Listing Target Groups...');
        const targetGroups = await utho.targetgroup.list();
        console.log('Target Groups:', JSON.stringify(targetGroups, null, 2));

        // Create a Target Group
        /*
        const newGroup = await utho.targetgroup.create({
            name: 'api-servers',
            dcslug: 'in-mumbai-1',
            protocol: 'http',
            port: 80,
            vpcid: 'your-vpc-id',
            health_check: {
                protocol: 'http',
                port: 80,
                path: '/health'
            }
        });
        */

    } catch (error) {
        console.error('Error:', error.message);
    }
}

targetGroupExample();
