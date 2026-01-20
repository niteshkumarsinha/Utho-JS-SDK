class SnapshotsService {
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
        return this.client.post('/snapshots', data);
    }

    /**
     * Delete a snapshot
     * @param {string} cloudId - Cloud server ID
     * @param {string} snapshotId - Snapshot ID
     * @returns {Promise<Object>} Deletion response
     */
    async delete(cloudId, snapshotId) {
        return this.client.delete(`/snapshots/${cloudId}/${snapshotId}`);
    }
}

module.exports = SnapshotsService;
