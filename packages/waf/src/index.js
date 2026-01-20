class WafService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all WAF instances
     * @returns {Promise<Object>} List of WAF instances
     */
    async list() {
        return this.client.get('/waf/list');
    }

    /**
     * Create a new WAF
     * @param {Object} data - WAF creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/waf/create', data);
    }

    /**
     * Destroy a WAF instance
     * @param {Object} data - Deletion parameters (typically contains waf_id)
     * @returns {Promise<Object>} Deletion response
     */
    async delete(data) {
        return this.client.delete('/waf/delete', { data });
    }

    /**
     * Enable rule in ruleset
     * @param {Object} data - Parameters for enabling rule
     * @returns {Promise<Object>} Response
     */
    async attachRule(data) {
        return this.client.post('/waf/attach_rule', data);
    }

    /**
     * Disable rule in ruleset
     * @param {Object} data - Parameters for disabling rule
     * @returns {Promise<Object>} Response
     */
    async detachRule(data) {
        return this.client.post('/waf/detach_rule', data);
    }

    /**
     * Attach Loadbalancer to WAF (Create WAF instance)
     * @param {Object} data - Parameters
     * @returns {Promise<Object>} Response
     */
    async createWAFInstance(data) {
        return this.client.post('/waf/create_waf_instance', data);
    }
}

module.exports = WafService;
