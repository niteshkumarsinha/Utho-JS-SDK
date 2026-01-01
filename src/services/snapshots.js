class SnapshotService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all snapshots
     * @returns {Promise<Object>} List of snapshots
     */
    async list() {
        return this.client.get('/snapshots');
    }

    /**
     * Create a new snapshot
     * @param {Object} data - Snapshot creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/snapshots/create', data);
    }
}

module.exports = SnapshotService;
