const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function lbExample() {
    try {
        console.log('Listing load balancers...');
        const lbs = await utho.loadbalancer.list();
        console.log('Load Balancers:', JSON.stringify(lbs, null, 2));

        // Create a load balancer
        // await utho.loadbalancer.create({ name: 'my-lb', dcslug: 'in-mumbai-1' });

    } catch (error) {
        console.error('Error:', error.message);
    }
}

lbExample();
