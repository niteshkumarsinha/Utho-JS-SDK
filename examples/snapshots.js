const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function snapshotExample() {
    try {
        console.log('Listing snapshots...');
        const snapshots = await utho.snapshots.list();
        console.log('Snapshots:', JSON.stringify(snapshots, null, 2));

        // Create a snapshot
        // await utho.snapshots.create({
        //     serverid: '123',
        //     name: 'my-snapshot'
        // });

    } catch (error) {
        console.error('Error:', error.message);
    }
}

snapshotExample();
