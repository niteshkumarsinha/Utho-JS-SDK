class SQSService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all SQS queues
     * @returns {Promise<Object>} List of SQS queues
     */
    async list() {
        return this.client.get('/sqs');
    }

    /**
     * Create a new SQS instance
     * @param {Object} data - SQS creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/sqs/create', data);
    }

    /**
     * Delete an SQS instance
     * @param {string} id - SQS instance ID
     * @returns {Promise<Object>} Deletion response
     */
    async delete(id) {
        return this.client.delete(`/sqs/${id}`);
    }
}

module.exports = SQSService;
