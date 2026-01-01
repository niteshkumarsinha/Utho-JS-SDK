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
     * List all firewalls
     * @returns {Promise<Object>} List of firewalls
     */
    async listFirewalls() {
        return this.client.get('/firewall');
    }
}

module.exports = NetworkingService;
