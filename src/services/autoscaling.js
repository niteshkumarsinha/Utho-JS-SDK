class AutoscalingService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all autoscaling groups
     * @returns {Promise<Object>} List of autoscaling groups
     */
    async list() {
        return this.client.get('/autoscaling');
    }
}

module.exports = AutoscalingService;
