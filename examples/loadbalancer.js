const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function lbExample() {
    try {
        console.log('Listing load balancers...');
        const lbs = await utho.loadbalancer.list();
        console.log('Load Balancers:', JSON.stringify(lbs, null, 2));

        if (lbs.data && lbs.data.length > 0) {
            const lbId = lbs.data[0].id;
            console.log(`\nListing Frontends for LB ${lbId}...`);
            // Note: In a real scenario, you'd fetch specific LB details
            // For example purposes:
            // await utho.loadbalancer.addFrontend(lbId, { port: 80, protocol: 'http' });
        }

        // Create a load balancer
        /*
        await utho.loadbalancer.create({ 
            name: 'my-lb', 
            dcslug: 'in-mumbai-1',
            type: 'application' 
        });
        */

    } catch (error) {
        console.error('Error:', error.message);
    }
}

lbExample();
