class ISOService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all ISOs
     * @returns {Promise<Object>} List of ISOs
     */
    async list() {
        return this.client.get('/iso/list');
    }

    /**
     * Add a new ISO
     * @param {Object} data - ISO data
     * @returns {Promise<Object>} Addition response
     */
    async add(data) {
        return this.client.post('/iso/add', data);
    }

    /**
     * Delete an ISO
     * @param {Object} data - Deletion data
     * @returns {Promise<Object>} Deletion response
     */
    async delete(data) {
        return this.client.post('/iso/delete', data);
    }
}

module.exports = ISOService;
