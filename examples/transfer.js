const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function transferExample() {
    try {
        // Initiate a resource transfer
        // const initiateResponse = await utho.transfer.initiate('cloud', 'cloud-id');
        // console.log('Transfer Initiated:', initiateResponse);
        // // You'll receive a token to share with the recipient

        // Receive a resource transfer
        // const receiveResponse = await utho.transfer.receive({
        //     id: 'resource-id',
        //     token: 'transfer-token',
        //     type: 'cloud'
        // });
        // console.log('Transfer Received:', receiveResponse);

        console.log('Transfer service example - uncomment code to use');

    } catch (error) {
        console.error('Error:', error.message);
    }
}

transferExample();
