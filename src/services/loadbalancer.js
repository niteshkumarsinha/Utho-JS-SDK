class LoadBalancerService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all load balancers
     * @returns {Promise<Object>} List of load balancers
     */
    async list() {
        return this.client.get('/loadbalancer/list');
    }

    /**
     * Create a new load balancer
     * @param {Object} data - Load balancer data
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/loadbalancer/create', data);
    }

    /**
     * Delete a load balancer
     * @param {Object} data - Deletion data
     * @returns {Promise<Object>} Deletion response
     */
    async delete(data) {
        return this.client.post('/loadbalancer/delete', data);
    }
}

module.exports = LoadBalancerService;
