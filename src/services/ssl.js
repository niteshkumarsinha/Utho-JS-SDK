class SSLService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all SSL certificates
     * @returns {Promise<Object>} List of certificates
     */
    async list() {
        return this.client.get('/certificates');
    }
}

module.exports = SSLService;
