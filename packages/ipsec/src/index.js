class IpSecService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all connection logs
     * @returns {Promise<Object>} List of connections
     */
    async list() {
        return this.client.get('/ipsec');
    }

    /**
     * Create a new connection
     * @param {Object} data - Connection parameters
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/ipsec', data);
    }

    /**
     * Delete a connection
     * @returns {Promise<Object>} Deletion response
     */
    async delete() {
        return this.client.delete('/ipsec');
    }

    /**
     * Update a connection
     * @param {Object} data - Update parameters
     * @returns {Promise<Object>} Update response
     */
    async update(data) {
        return this.client.put('/ipsec', data);
    }
}

module.exports = IpSecService;
