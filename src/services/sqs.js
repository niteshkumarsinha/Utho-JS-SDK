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
}

module.exports = SQSService;
