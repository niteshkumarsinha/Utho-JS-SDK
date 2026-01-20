class LoadBalancerService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all load balancers
     * @returns {Promise<Object>} List of load balancers
     */
    async list() {
        return this.client.get('/loadbalancer/');
    }

    /**
     * Create a new load balancer
     * @param {Object} data - Load balancer data
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/loadbalancer/add/', data);
    }

    /**
     * Delete a load balancer
     * @param {string} id - Load balancer ID
     * @returns {Promise<Object>} Deletion response
     */
    async delete(id) {
        return this.client.delete(`/loadbalancer/${id}/destroy/`);
    }

    /**
     * Update a load balancer
     * @param {string} id - Load balancer ID
     * @param {Object} data - Update parameters
     * @returns {Promise<Object>} Update response
     */
    async update(id, data) {
        return this.client.put(`/loadbalancer/${id}/update`, data);
    }

    /**
     * Get load balancer details
     * @param {string} id - Load balancer ID
     * @returns {Promise<Object>} Load balancer details
     */
    async get(id) {
        return this.client.get(`/loadbalancer/${id}/`);
    }

    /**
     * Add an ACL rule to a load balancer
     * @param {string} id - Load balancer ID
     * @param {Object} data - ACL rule parameters
     * @returns {Promise<Object>} Addition response
     */
    async addACL(id, data) {
        return this.client.post(`/loadbalancer/${id}/acl/`, data);
    }

    /**
     * Update an ACL rule
     * @param {string} id - Load balancer ID
     * @param {string} acl_id - ACL ID
     * @param {Object} data - ACL rule parameters
     * @returns {Promise<Object>} Update response
     */
    async updateACL(id, acl_id, data) {
        return this.client.put(`/loadbalancer/${id}/acl/${acl_id}`, data);
    }

    /**
     * Delete an ACL rule
     * @param {string} id - Load balancer ID
     * @param {string} acl_id - ACL ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteACL(id, acl_id) {
        return this.client.delete(`/loadbalancer/${id}/acl/${acl_id}`);
    }

    /**
     * Add a frontend to a load balancer
     * @param {string} id - Load balancer ID
     * @param {Object} data - Frontend parameters
     * @returns {Promise<Object>} Addition response
     */
    async addFrontend(id, data) {
        return this.client.post(`/loadbalancer/${id}/frontend`, data);
    }

    /**
     * Update a frontend
     * @param {string} id - Load balancer ID
     * @param {Object} data - Frontend parameters
     * @returns {Promise<Object>} Update response
     */
    async updateFrontend(id, data) {
        return this.client.put(`/loadbalancer/${id}/frontend`, data);
    }

    /**
     * Delete a frontend
     * @param {string} id - Load balancer ID
     * @param {string} frontend_id - Frontend ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteFrontend(id, frontend_id) {
        return this.client.delete(`/loadbalancer/${id}/frontend/${frontend_id}`);
    }

    /**
     * Add a backend to a load balancer
     * @param {string} id - Load balancer ID
     * @param {Object} data - Backend parameters
     * @returns {Promise<Object>} Addition response
     */
    async addBackend(id, data) {
        return this.client.post(`/loadbalancer/${id}/backend/`, data);
    }

    /**
     * Delete a backend
     * @param {string} id - Load balancer ID
     * @param {string} backend_id - Backend ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteBackend(id, backend_id) {
        return this.client.delete(`/loadbalancer/${id}/backend/${backend_id}`);
    }

    /**
     * Add advance routing to a load balancer
     * @param {string} id - Load balancer ID
     * @param {Object} data - Routing parameters
     * @returns {Promise<Object>} Addition response
     */
    async addAdvancedRoute(id, data) {
        return this.client.post(`/loadbalancer/${id}/route/`, data);
    }

    /**
     * Update advance routing
     * @param {string} id - Load balancer ID
     * @param {string} route_id - Route ID
     * @param {Object} data - Routing parameters
     * @returns {Promise<Object>} Update response
     */
    async updateAdvancedRoute(id, route_id, data) {
        return this.client.put(`/loadbalancer/${id}/route/${route_id}`, data);
    }

    /**
     * Delete advance routing
     * @param {string} id - Load balancer ID
     * @param {string} route_id - Route ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteAdvancedRoute(id, route_id) {
        return this.client.delete(`/loadbalancer/${id}/route/${route_id}`);
    }
}

module.exports = LoadBalancerService;
