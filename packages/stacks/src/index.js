class StacksService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all stacks
     * @returns {Promise<Object>} List of stacks
     */
    async list() {
        return this.client.get('/stacks');
    }

    /**
     * Create a new stack
     * @param {Object} data - Stack creation parameters
     * @param {string} data.title - Stack title
     * @param {string} data.description - Stack description
     * @param {string} data.images - Images for the stack
     * @param {string} data.status - Stack status
     * @param {string} data.script - Automation script
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/stacks', data);
    }

    /**
     * Delete a stack
     * @param {string} id - Stack ID
     * @returns {Promise<Object>} Deletion response
     */
    async delete(id) {
        return this.client.delete(`/stacks/${id}`);
    }

    /**
     * Update a stack
     * @param {string} id - Stack ID
     * @param {Object} data - Update parameters
     * @param {string} [data.title] - Stack title
     * @param {string} [data.description] - Stack description
     * @param {string} [data.images] - Images for the stack
     * @param {string} [data.status] - Stack status
     * @param {string} [data.script] - Automation script
     * @returns {Promise<Object>} Update response
     */
    async update(id, data) {
        return this.client.put(`/stacks/${id}`, data);
    }
}

module.exports = StacksService;
