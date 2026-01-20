class TransferService {
    constructor(client) {
        this.client = client;
    }

    /**
     * Receive a resource transfer
     * @param {Object} data - Transfer receive parameters
     * @param {string} data.id - Resource ID
     * @param {string} data.token - Transfer token
     * @param {string} data.type - Resource type
     * @returns {Promise<Object>} Receive response
     */
    async receive(data) {
        return this.client.post('/transfer/process/', data);
    }

    /**
     * Initiate a resource transfer
     * @param {string} resourceType - Type of resource to transfer
     * @param {string} resourceId - Resource ID to transfer
     * @returns {Promise<Object>} Initiate response with transfer token
     */
    async initiate(resourceType, resourceId) {
        return this.client.get(`/transfer/${resourceType}/${resourceId}/`);
    }
}

module.exports = TransferService;
