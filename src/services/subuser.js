class SubUserService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all subusers
     * @returns {Promise<Object>} List of subusers
     */
    async list() {
        return this.client.get('/user');
    }

    /**
     * Create a new subuser
     * @param {Object} data - Subuser parameters
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/user', data);
    }

    /**
     * Get subuser details
     * @param {string} id - Subuser ID
     * @returns {Promise<Object>} Subuser details
     */
    async get(id) {
        return this.client.get(`/user/${id}`);
    }

    /**
     * Update a subuser
     * @param {string} id - Subuser ID
     * @param {Object} data - Update parameters
     * @returns {Promise<Object>} Update response
     */
    async update(id, data) {
        return this.client.put(`/user/${id}`, data);
    }

    /**
     * Delete a subuser
     * @param {string} subuser_id - Subuser ID
     * @returns {Promise<Object>} Deletion response
     */
    async delete(subuser_id) {
        return this.client.delete(`/user/${subuser_id}`);
    }
}

module.exports = SubUserService;
