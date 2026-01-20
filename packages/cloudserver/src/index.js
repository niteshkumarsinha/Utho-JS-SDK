class CloudServerService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all cloud servers
     * @returns {Promise<Object>} List of cloud servers
     */
    async list() {
        return this.client.get('/cloud/');
    }

    /**
     * Get cloud server details
     * @param {string} cloudid - Cloud server ID
     * @returns {Promise<Object>} Cloud server details
     */
    async get(cloudid) {
        return this.client.get(`/cloud/${cloudid}`);
    }

    /**
     * Deploy a new cloud server
     * @param {Object} data - Deployment data
     * @returns {Promise<Object>} Deployment response
     */
    async deploy(data) {
        return this.client.post('/cloud/deploy/', data);
    }

    /**
     * Destroy a cloud server
     * @param {string} cloudid - Cloud server ID
     * @returns {Promise<Object>} Destruction response
     */
    async delete(cloudid) {
        return this.client.delete(`/cloud/${cloudid}/destroy`);
    }

    /**
     * Power operations for a cloud server
     * @param {string} cloudid - Cloud server ID
     * @param {string} action - Action (poweron, poweroff, hardreboot, powercycle)
     * @returns {Promise<Object>} Response
     */
    async control(cloudid, action) {
        return this.client.post(`/cloud/${cloudid}/${action}/`);
    }

    /**
     * Get available OS images
     * @returns {Promise<Object>} Response
     */
    async images() {
        return this.client.get('/cloud/images');
    }

    /**
     * Get available resize plans for a server
     * @param {string} cloudid - Cloud server ID
     * @returns {Promise<Object>} Response
     */
    async resizePlans(cloudid) {
        return this.client.get(`/cloud/${cloudid}/resizeplans/`);
    }

    /**
     * Create a snapshot of a cloud server
     * @param {string} cloudid - Cloud server ID
     * @returns {Promise<Object>} Response
     */
    async createSnapshot(cloudid) {
        return this.client.post(`/cloud/${cloudid}/snapshot/create/`);
    }

    /**
     * Update billing cycle for a cloud server
     * @param {string} cloudid - Cloud server ID
     * @param {Object} data - Billing cycle data
     * @returns {Promise<Object>} Response
     */
    async updateBillingCycle(cloudid, data) {
        return this.client.post(`/cloud/${cloudid}/billingcycle`, data);
    }

    /**
     * Rebuild a cloud server
     * @param {string} cloudid - Cloud server ID
     * @param {Object} data - Rebuild parameters
     * @returns {Promise<Object>} Response
     */
    async rebuild(cloudid, data) {
        return this.client.post(`/cloud/${cloudid}/rebuild/`, data);
    }

    /**
     * Reset password for a cloud server
     * @param {string} cloudid - Cloud server ID
     * @param {Object} data - Password data
     * @returns {Promise<Object>} Response
     */
    async resetPassword(cloudid, data) {
        return this.client.post(`/cloud/${cloudid}/resetpassword/`, data);
    }

    /**
     * Resize a cloud server
     * @param {string} cloudid - Cloud server ID
     * @param {Object} data - Resize parameters
     * @returns {Promise<Object>} Response
     */
    async resize(cloudid, data) {
        return this.client.post(`/cloud/${cloudid}/resize/`, data);
    }

    /**
     * Restore a snapshot to a cloud server
     * @param {string} cloudid - Cloud server ID
     * @param {string} snapshotid - Snapshot ID
     * @returns {Promise<Object>} Response
     */
    async restoreSnapshot(cloudid, snapshotid) {
        return this.client.post(`/cloud/${cloudid}/snapshot/${snapshotid}/restore/`);
    }

    /**
     * Update storage for a cloud server
     * @param {string} cloudid - Cloud server ID
     * @param {string} storageid - Storage ID
     * @param {Object} data - Update data
     * @returns {Promise<Object>} Response
     */
    async updateStorage(cloudid, storageid, data) {
        return this.client.post(`/cloud/${cloudid}/storage/${storageid}/update`, data);
    }

    /**
     * Assign a public IP to a cloud server
     * @param {string} cloudid - Cloud server ID
     * @param {Object} data - IP assignment data
     * @returns {Promise<Object>} Response
     */
    async assignPublicIP(cloudid, data) {
        return this.client.post(`/cloud/${cloudid}/assignpublicip`, data);
    }

    /**
     * Update RDNS for a specific IP
     * @param {string} cloud_id - Cloud server ID
     * @param {string} ip_address - IP address
     * @param {Object} data - RDNS parameters
     * @returns {Promise<Object>} Response
     */
    async updateRDNS(cloud_id, ip_address, data) {
        return this.client.post(`/cloud/${cloud_id}/updaterdns/${ip_address}`, data);
    }

    /**
     * Delete a public IP from a cloud server
     * @param {string} cloudid - Cloud server ID
     * @param {string} public_ip - Public IP address to delete
     * @returns {Promise<Object>} Response
     */
    async deletePublicIP(cloudid, public_ip) {
        return this.client.delete(`/cloud/${cloudid}/ip/${public_ip}/delete`);
    }

    /**
     * Enable rescue mode for a cloud server
     * @param {string} cloudid - Cloud server ID
     * @param {Object} data - Rescue mode data
     * @returns {Promise<Object>} Response
     */
    async enableRescue(cloudid, data) {
        return this.client.post(`/cloud/${cloudid}/enablerescue`, data);
    }

    /**
     * Disable rescue mode for a cloud server
     * @param {string} cloudid - Cloud server ID
     * @returns {Promise<Object>} Response
     */
    async disableRescue(cloudid) {
        return this.client.post(`/cloud/${cloudid}/disablerescue`);
    }

    /**
     * Mount an ISO to a cloud server
     * @param {string} cloudid - Cloud server ID
     * @param {Object} data - ISO parameters
     * @returns {Promise<Object>} Response
     */
    async mountISO(cloudid, data) {
        return this.client.post(`/cloud/${cloudid}/mountiso`, data);
    }

    /**
     * Unmount an ISO from a cloud server
     * @param {string} cloudid - Cloud server ID
     * @returns {Promise<Object>} Response
     */
    async unmountISO(cloudid) {
        return this.client.post(`/cloud/${cloudid}/umountiso`);
    }

    /**
     * Disable backup for a cloud server
     * @param {string} cloudid - Cloud server ID
     * @returns {Promise<Object>} Response
     */
    async disableBackup(cloudid) {
        return this.client.post(`/cloud/${cloudid}/backups/disable`);
    }

    /**
     * Enable backup for a cloud server
     * @param {string} cloudid - Cloud server ID
     * @returns {Promise<Object>} Response
     */
    async enableBackup(cloudid) {
        return this.client.post(`/cloud/${cloudid}/backups/enable`);
    }
}

module.exports = CloudServerService;
