class TargetGroupService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all target groups
     * @returns {Promise<Object>} List of target groups
     */
    async list() {
        return this.client.get('/targetgroup');
    }

    /**
     * Create a new target group
     * @param {Object} data - Target group parameters
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/targetgroup', data);
    }

    /**
     * Update a target group
     * @param {string} target_group_id - Target group ID
     * @param {Object} data - Update parameters
     * @returns {Promise<Object>} Update response
     */
    async update(target_group_id, data) {
        return this.client.put(`/targetgroup/${target_group_id}`, data);
    }

    /**
     * Delete a target group
     * @param {string} id - Target group ID
     * @returns {Promise<Object>} Deletion response
     */
    async delete(id) {
        return this.client.delete(`/targetgroup/${id}`);
    }
}

module.exports = TargetGroupService;
