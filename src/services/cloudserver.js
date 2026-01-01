class CloudServerService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all cloud servers
     * @returns {Promise<Object>} List of cloud servers
     */
    async list() {
        return this.client.get('/cloud/list');
    }

    /**
     * Get cloud server details
     * @param {string} dcslug - Data center slug
     * @param {string} cloudid - Cloud server ID
     * @returns {Promise<Object>} Cloud server details
     */
    async get(dcslug, cloudid) {
        return this.client.get(`/cloud/${dcslug}/${cloudid}/info`);
    }

    /**
     * Deploy a new cloud server
     * @param {Object} data - Deployment data
     * @returns {Promise<Object>} Deployment response
     */
    async deploy(data) {
        return this.client.post('/cloud/deploy', data);
    }

    /**
     * Delete a cloud server
     * @param {Object} data - Deletion data (typically contains dcslug and cloudid)
     * @returns {Promise<Object>} Deletion response
     */
    async delete(data) {
        return this.client.post('/cloud/delete', data);
    }

    /**
     * Control a cloud server (poweron, poweroff, reboot, etc.)
     * @param {string} dcslug - Data center slug
     * @param {string} cloudid - Cloud server ID
     * @param {string} action - Action to perform
     * @returns {Promise<Object>} Control response
     */
    async control(dcslug, cloudid, action) {
        return this.client.post(`/cloud/${dcslug}/${cloudid}/action`, { action });
    }
}

module.exports = CloudServerService;
