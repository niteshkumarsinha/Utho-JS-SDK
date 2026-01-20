class VpnService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all VPN instances
     * @returns {Promise<Object>} List of VPN instances
     */
    async list() {
        return this.client.get('/vpn');
    }

    /**
     * Create a new VPN instance
     * @param {Object} data - VPN creation parameters
     * @param {string} data.name - VPN instance name
     * @param {string} data.dcslug - Datacenter slug
     * @param {string} data.plan - VPN plan/size
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/vpn/create', data);
    }

    /**
     * Delete a VPN instance
     * @param {string} id - VPN instance ID
     * @returns {Promise<Object>} Deletion response
     */
    async delete(id) {
        return this.client.delete(`/vpn/${id}/delete`);
    }
}

module.exports = VpnService;
