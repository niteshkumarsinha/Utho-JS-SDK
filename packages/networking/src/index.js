class NetworkingService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all DNS domains
     * @returns {Promise<Object>} List of domains
     */
    async listDomains() {
        return this.client.get('/dns');
    }

    /**
     * Get details for a specific domain
     * @param {string} domain - Domain name
     * @returns {Promise<Object>} Domain details
     */
    async getDomain(domain) {
        return this.client.get(`/dns/${domain}`);
    }

    /**
     * Add a new DNS domain
     * @param {Object} data - Domain creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async createDomain(data) {
        return this.client.post('/dns/adddomain', data);
    }

    /**
     * Delete a DNS domain
     * @param {string} domain - Domain name to delete
     * @returns {Promise<Object>} Deletion response
     */
    async deleteDomain(domain) {
        return this.client.delete(`/dns/${domain}/delete`);
    }

    /**
     * Add a DNS record to a domain
     * @param {string} domain - Domain name
     * @param {Object} data - Record parameters
     * @returns {Promise<Object>} Addition response
     */
    async addDNSRecord(domain, data) {
        return this.client.post(`/dns/${domain}/record/add/`, data);
    }

    /**
     * Delete a DNS record
     * @param {string} domain - Domain name
     * @param {string} recordid - Record ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteDNSRecord(domain, recordid) {
        return this.client.delete(`/dns/${domain}/record/${recordid}/delete/`);
    }

    /**
     * List all firewalls
     * @returns {Promise<Object>} List of firewalls
     */
    async listFirewalls() {
        return this.client.get('/firewall');
    }

    /**
     * Get firewall details
     * @param {string} id - Firewall ID
     * @returns {Promise<Object>} Firewall details
     */
    async getFirewall(id) {
        return this.client.get(`/firewall/${id}`);
    }

    /**
     * Create a new firewall
     * @param {Object} data - Firewall creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async createFirewall(data) {
        return this.client.post('/firewall/create', data);
    }

    /**
     * Delete a firewall
     * @param {string} id - Firewall ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteFirewall(id) {
        return this.client.delete(`/firewall/${id}/destroy`);
    }

    /**
     * Add a rule to a firewall
     * @param {string} firewall_id - Firewall ID
     * @param {Object} data - Rule parameters
     * @returns {Promise<Object>} Addition response
     */
    async addFirewallRule(firewall_id, data) {
        return this.client.post(`/firewall/${firewall_id}/rule/add`, data);
    }

    /**
     * Delete a rule from a firewall
     * @param {string} firewall_id - Firewall ID
     * @param {string} rule_id - Rule ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteFirewallRule(firewall_id, rule_id) {
        return this.client.delete(`/firewall/${firewall_id}/rule/${rule_id}/delete`);
    }

    /**
     * Add a server to a firewall
     * @param {string} firewall_id - Firewall ID
     * @param {Object} data - Server parameters
     * @returns {Promise<Object>} Addition response
     */
    async addFirewallServer(firewall_id, data) {
        return this.client.post(`/firewall/${firewall_id}/server/add`, data);
    }

    /**
     * Delete a server from a firewall
     * @param {string} id - Firewall ID
     * @param {string} cloudid - Cloud server ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteFirewallServer(id, cloudid) {
        return this.client.delete(`/firewall/${id}/server/${cloudid}/delete`);
    }
}

module.exports = NetworkingService;
