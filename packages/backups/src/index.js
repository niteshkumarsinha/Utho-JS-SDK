class BackupsService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all backups
     * @returns {Promise<Object>} List of backups
     */
    async list() {
        return this.client.get('/backups');
    }

    /**
     * Delete a backup
     * @param {string} id - Backup ID
     * @returns {Promise<Object>} Deletion response
     */
    async delete(id) {
        return this.client.delete(`/backups/${id}`);
    }

    /**
     * Restore from a backup
     * @param {string} backupId - Backup ID to restore from
     * @param {Object} data - Restore parameters
     * @returns {Promise<Object>} Restore response
     */
    async restore(backupId, data) {
        return this.client.post(`/backups/${backupId}/restore`, data);
    }
}

module.exports = BackupsService;
