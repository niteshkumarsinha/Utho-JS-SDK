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
}

module.exports = SecurityService;
