class SecurityService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all SSH keys
     * @returns {Promise<Object>} List of SSH keys
     */
    async listSSHKeys() {
        return this.client.get('/key');
    }

    /**
     * Import a new SSH key
     * @param {Object} data - SSH key import parameters
     * @returns {Promise<Object>} Import response
     */
    async importSSHKey(data) {
        return this.client.post('/key/import', data);
    }

    /**
     * List all API keys
     * @returns {Promise<Object>} List of API keys
     */
    async listAPIKeys() {
        return this.client.get('/api');
    }

    /**
     * Delete an SSH key
     * @param {string} id - SSH key ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteSSHKey(id) {
        return this.client.delete(`/key/${id}`);
    }

    /**
     * Generate a new API key
     * @param {Object} data - API key generation parameters
     * @returns {Promise<Object>} Generated API key
     */
    async generateAPIKey(data) {
        return this.client.post('/api/generate', data);
    }

    /**
     * Delete an API key
     * @param {string} id - API key ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteAPIKey(id) {
        return this.client.delete(`/api/${id}`);
    }
}

module.exports = SecurityService;
