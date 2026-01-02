class StorageService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all EBS volumes
     * @returns {Promise<Object>} List of EBS volumes
     */
    async list() {
        return this.client.get('/ebs');
    }

    /**
     * Create a new EBS volume
     * @param {Object} data - EBS creation parameters
     * @param {string} data.name - Volume name
     * @param {string} data.dcslug - Datacenter slug
     * @param {string} data.disk - Disk size
     * @param {string} data.disk_type - Disk type
     * @returns {Promise<Object>} Creation response with ebsid
     */
    async create(data) {
        return this.client.post('/ebs', data);
    }

    /**
     * Delete an EBS volume
     * @param {string} id - EBS volume ID
     * @returns {Promise<Object>} Deletion response
     */
    async delete(id) {
        return this.client.delete(`/ebs/${id}/destroy`);
    }

    /**
     * Attach an EBS volume to a cloud server
     * @param {string} ebsId - EBS volume ID
     * @param {Object} data - Attach parameters
     * @param {string} data.serverid - Server ID to attach to
     * @returns {Promise<Object>} Attach response
     */
    async attach(ebsId, data) {
        return this.client.post(`/ebs/${ebsId}/attach`, data);
    }

    /**
     * Detach an EBS volume from its server
     * @param {string} ebsId - EBS volume ID
     * @returns {Promise<Object>} Detach response
     */
    async detach(ebsId) {
        return this.client.post(`/ebs/${ebsId}/detach`);
    }
}

module.exports = StorageService;
