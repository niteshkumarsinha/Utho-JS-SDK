const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function ipSecExample() {
    try {
        console.log('Listing IpSec VPN Connections...');
        const connections = await utho.ipsec.list();
        console.log('IpSec Connections:', JSON.stringify(connections, null, 2));

        // Create an IpSec Connection
        /*
        const newConn = await utho.ipsec.create({
            name: 'office-to-cloud',
            dcslug: 'in-mumbai-1',
            remote_gateway: '1.2.3.4',
            local_id: 'office',
            remote_id: 'cloud',
            pre_shared_key: 'secret-key',
            encryption_phase1: 'aes256-sha256-modp2048',
            encryption_phase2: 'aes256-sha256-modp2048'
        });
        */

    } catch (error) {
        console.error('Error:', error.message);
    }
}

ipSecExample();
