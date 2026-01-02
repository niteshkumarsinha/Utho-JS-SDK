const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function wafExample() {
    try {
        console.log('Listing WAF Instances...');
        const wafs = await utho.waf.list();
        console.log('WAF Instances:', JSON.stringify(wafs, null, 2));

        // Create a WAF instance
        // const createResponse = await utho.waf.create({
        //     name: 'my-waf',
        //     dcslug: 'in-mumbai-1'
        // });
        // console.log('Created:', createResponse);

        // Attach WAF to a load balancer
        // await utho.waf.attach('waf-id', {
        //     resource_id: 'loadbalancer-id',
        //     resource_type: 'loadbalancer'
        // });

        // Detach WAF from resource
        // await utho.waf.detach('waf-id');

        // Delete a WAF instance
        // await utho.waf.delete('waf-id');

    } catch (error) {
        console.error('Error:', error.message);
    }
}

wafExample();
