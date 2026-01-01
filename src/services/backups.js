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
}

module.exports = BackupsService;
