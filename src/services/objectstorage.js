class ObjectStorageService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List buckets in a datacenter
     * @param {string} dcslug - Datacenter slug
     * @returns {Promise<Object>} List of buckets
     */
    async listBuckets(dcslug) {
        return this.client.get(`/objectstorage/${dcslug}/bucket`);
    }

    /**
     * Create a new bucket
     * @param {Object} data - Bucket creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async createBucket(data) {
        return this.client.post('/objectstorage/bucket/create', data);
    }

    /**
     * Delete a bucket
     * @param {string} dcslug - Datacenter slug
     * @param {string} name - Bucket name
     * @returns {Promise<Object>} Deletion response
     */
    async deleteBucket(dcslug, name) {
        return this.client.delete(`/objectstorage/${dcslug}/bucket/${name}`);
    }

    /**
     * List access keys for a datacenter
     * @param {string} dcslug - Datacenter slug
     * @returns {Promise<Object>} List of access keys
     */
    async listAccessKeys(dcslug) {
        return this.client.get(`/objectstorage/${dcslug}/keys`);
    }

    /**
     * Create a new access key
     * @param {string} dcslug - Datacenter slug
     * @returns {Promise<Object>} Created access key
     */
    async createAccessKey(dcslug) {
        return this.client.post(`/objectstorage/${dcslug}/keys`);
    }
}

module.exports = ObjectStorageService;
