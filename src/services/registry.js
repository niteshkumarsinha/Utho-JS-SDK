class RegistryService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all container registries
     * @returns {Promise<Object>} List of registries
     */
    async list() {
        return this.client.get('/registry');
    }
}

module.exports = RegistryService;
