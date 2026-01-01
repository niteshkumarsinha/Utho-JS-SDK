class KubernetesService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all Kubernetes clusters
     * @returns {Promise<Object>} List of Kubernetes clusters
     */
    async list() {
        return this.client.get('/kubernetes/');
    }

    /**
     * Deploy a new Kubernetes cluster
     * @param {Object} data - Deployment parameters
     * @returns {Promise<Object>} Deployment response
     */
    async create(data) {
        return this.client.post('/kubernetes/deploy', data);
    }
}

module.exports = KubernetesService;
