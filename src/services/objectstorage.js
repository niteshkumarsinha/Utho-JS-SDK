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
}

module.exports = ObjectStorageService;
