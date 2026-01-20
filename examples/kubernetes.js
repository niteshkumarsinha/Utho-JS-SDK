/**
 * Kubernetes Example
 * Shows both Monolithic and Modular usage patterns
 */

// --- Option 1: Monolithic Usage (using uthosdk-js) ---
const Utho = require('../src/index');
const utho = new Utho('YOUR_API_KEY');

async function monolithicExample() {
    try {
        console.log('--- Monolithic Usage ---');
        const clusters = await utho.kubernetes.list();
        console.log('Clusters found:', clusters.length);
    } catch (error) {
        console.error('Monolithic error:', error.message);
    }
}

// --- Option 2: Modular Usage (Recommended) ---
const Client = require('../packages/core/src/index');
const KubernetesService = require('../packages/kubernetes/src/index');

const client = new Client('YOUR_API_KEY');
const k8s = new KubernetesService(client);

async function modularExample() {
    try {
        console.log('\n--- Modular Usage ---');
        const clusters = await k8s.list();
        console.log('Clusters found:', clusters.length);

        if (clusters.length > 0) {
            const clusterId = clusters[0].id;

            // 2. Get Details
            const details = await k8s.get(clusterId);
            console.log(`Cluster status:`, details.status);

            // 3. Download Kubeconfig
            // const config = await k8s.download(clusterId);
        }

    } catch (error) {
        console.error('Modular error:', error.message);
    }
}

async function run() {
    await monolithicExample();
    await modularExample();
}

run();
