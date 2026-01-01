const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function objectStorageExample() {
    try {
        console.log('Listing buckets in in-mumbai-1...');
        const buckets = await utho.objectstorage.listBuckets('in-mumbai-1');
        console.log('Buckets:', JSON.stringify(buckets, null, 2));

        // Create a bucket
        // await utho.objectstorage.createBucket({
        //     name: 'my-new-bucket',
        //     dcslug: 'in-mumbai-1'
        // });

    } catch (error) {
        console.error('Error:', error.message);
    }
}

objectStorageExample();
