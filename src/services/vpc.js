class VPCService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all VPCs
     * @returns {Promise<Object>} List of VPCs
     */
    async list() {
        return this.client.get('/vpc/');
    }

    /**
     * Create a new VPC
     * @param {Object} data - VPC creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/vpc/', data);
    }
}

module.exports = VPCService;
