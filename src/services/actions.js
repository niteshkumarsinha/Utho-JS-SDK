class ActionsService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all actions
     * @returns {Promise<Object>} List of actions
     */
    async list() {
        return this.client.get('/v2/actions/');
    }

    /**
     * Get action details
     * @param {string} id - Action ID
     * @returns {Promise<Object>} Action details
     */
    async get(id) {
        return this.client.get(`/actions/${id}`);
    }
}

module.exports = ActionsService;
