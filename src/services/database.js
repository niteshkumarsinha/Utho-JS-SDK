class DatabaseService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all database clusters
     * @returns {Promise<Object>} List of database clusters
     */
    async list() {
        return this.client.get('/databases');
    }

    /**
     * Create a new database cluster
     * @param {Object} data - Database creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/databases', data);
    }
}

module.exports = DatabaseService;
