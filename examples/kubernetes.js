const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function kubernetesExample() {
    try {
        console.log('Listing Kubernetes clusters...');
        const clusters = await utho.kubernetes.list();
        console.log('Clusters:', JSON.stringify(clusters, null, 2));

        // Deploy a cluster
        // await utho.kubernetes.create({
        //     name: 'test-cluster',
        //     dcslug: 'in-mumbai-1'
        // });

    } catch (error) {
        console.error('Error:', error.message);
    }
}

kubernetesExample();
