class SslService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all SSL certificates
     * @returns {Promise<Object>} List of SSL certificates
     */
    async list() {
        return this.client.get('/ssl');
    }

    /**
     * Create a new SSL certificate
     * @param {Object} data - SSL certificate creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/ssl', data);
    }

    /**
     * Delete an SSL certificate
     * @param {string} id - SSL certificate ID
     * @returns {Promise<Object>} Deletion response
     */
    async delete(id) {
        return this.client.delete(`/ssl/${id}`);
    }
}

module.exports = SslService;
