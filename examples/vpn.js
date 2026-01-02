const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function vpnExample() {
    try {
        console.log('Listing VPN Instances...');
        const vpns = await utho.vpn.list();
        console.log('VPN Instances:', JSON.stringify(vpns, null, 2));

        // Create a VPN instance
        // const createResponse = await utho.vpn.create({
        //     name: 'my-vpn',
        //     dcslug: 'in-mumbai-1',
        //     plan: 'vpn-small'
        // });
        // console.log('Created:', createResponse);

        // Delete a VPN instance
        // await utho.vpn.delete('vpn-id');

    } catch (error) {
        console.error('Error:', error.message);
    }
}

vpnExample();
