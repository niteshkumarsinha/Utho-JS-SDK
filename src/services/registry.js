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

    /**
     * Create a new container registry
     * @param {Object} data - Registry creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/registry', data);
    }

    /**
     * Delete a container registry
     * @param {string} id - Registry ID
     * @returns {Promise<Object>} Deletion response
     */
    async delete(id) {
        return this.client.delete(`/registry/${id}`);
    }
}

module.exports = RegistryService;
