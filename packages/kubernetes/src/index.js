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
     * Create a new Kubernetes cluster
     * @param {Object} data - Cluster creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/kubernetes', data);
    }

    /**
     * Get Kubernetes cluster details
     * @param {string} id - Cluster ID
     * @returns {Promise<Object>} Cluster details
     */
    async get(id) {
        return this.client.get(`/kubernetes/${id}`);
    }

    /**
     * Delete a Kubernetes cluster
     * @param {string} id - Cluster ID
     * @returns {Promise<Object>} Deletion response
     */
    async delete(id) {
        return this.client.delete(`/kubernetes/${id}`);
    }
}

module.exports = KubernetesService;
