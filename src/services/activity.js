class ActivityService {
    constructor(client) {
        this.client = client;
    }

    /**
     * Get activity logs
     * @returns {Promise<Object>} Activity logs
     */
    async list() {
        return this.client.get('/activity');
    }
}

module.exports = ActivityService;
