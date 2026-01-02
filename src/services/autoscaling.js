class AutoscalingService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all autoscaling groups
     * @returns {Promise<Object>} List of autoscaling groups
     */
    async list() {
        return this.client.get('/autoscaling');
    }

    /**
     * Create a new autoscaling group
     * @param {Object} data - Autoscaling group creation parameters
     * @param {string} data.name - Name of the autoscaling group
     * @param {number} data.min_size - Minimum number of instances
     * @param {number} data.max_size - Maximum number of instances
     * @param {string} data.image - Image ID to use
     * @param {string} data.plan - Plan/size for instances
     * @param {string} data.script - Startup script
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/autoscaling/create', data);
    }

    /**
     * Delete an autoscaling group
     * @param {string} id - Autoscaling group ID
     * @returns {Promise<Object>} Deletion response
     */
    async delete(id) {
        return this.client.delete(`/autoscaling/${id}/delete`);
    }

    /**
     * Update an autoscaling group
     * @param {string} id - Autoscaling group ID
     * @param {Object} data - Update parameters
     * @param {number} [data.min_size] - Minimum number of instances
     * @param {number} [data.max_size] - Maximum number of instances
     * @returns {Promise<Object>} Update response
     */
    async update(id, data) {
        return this.client.put(`/autoscaling/${id}`, data);
    }
}

module.exports = AutoscalingService;
