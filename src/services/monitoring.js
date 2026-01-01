class MonitoringService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all monitoring alert policies
     * @returns {Promise<Object>} List of alert policies
     */
    async listAlertPolicies() {
        return this.client.get('/monitoring/alerts');
    }
}

module.exports = MonitoringService;
