class ObjectStorageService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List object storage plans
     * @returns {Promise<Object>} List of plans
     */
    async getPlans() {
        return this.client.get('/pricing/objectstorage');
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
     * Get bucket details
     * @param {string} dcslug - Datacenter slug
     * @param {string} name - Bucket name
     * @returns {Promise<Object>} Bucket details
     */
    async getBucketDetails(dcslug, name) {
        return this.client.get(`/objectstorage/${dcslug}/bucket/${name}/`);
    }

    /**
     * Create a new bucket
     * @param {Object} data - Bucket creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async createBucket(data) {
        return this.client.post('/objectstorage/bucket/create/', data);
    }

    /**
     * Delete a bucket
     * @param {string} dcslug - Datacenter slug
     * @param {string} name - Bucket name
     * @returns {Promise<Object>} Deletion response
     */
    async deleteBucket(dcslug, name) {
        return this.client.delete(`/objectstorage/${dcslug}/bucket/${name}/delete/`);
    }

    /**
     * Update access policy of a bucket
     * @param {string} dcslug - Datacenter slug
     * @param {string} bucketName - Bucket name
     * @param {string} policyType - Policy type
     * @returns {Promise<Object>} Update response
     */
    async updateAccessPolicy(dcslug, bucketName, policyType) {
        return this.client.post(`/objectstorage/${dcslug}/bucket/${bucketName}/policy/${policyType}`);
    }

    /**
     * Update permission of access key for a bucket
     * @param {string} dcslug - Datacenter slug
     * @param {string} bucketName - Bucket name
     * @param {string} permission - Selected permission
     * @param {string} accessKey - Selected access key
     * @returns {Promise<Object>} Update response
     */
    async updateAccessKeyPermission(dcslug, bucketName, permission, accessKey) {
        return this.client.post(`/objectstorage/${dcslug}/bucket/${bucketName}/permission/${permission}/accesskey/${accessKey}/`);
    }

    /**
     * Get sharable URL of object storage file
     * @param {string} dcslug - Datacenter slug
     * @param {string} name - Bucket name
     * @returns {Promise<Object>} Sharable URL response
     */
    async getSharableUrl(dcslug, name) {
        return this.client.get(`/objectstorage/${dcslug}/bucket/${name}/download`);
    }

    /**
     * Upload file to bucket
     * @param {string} dcslug - Datacenter slug
     * @param {string} bucketName - Bucket name
     * @param {Object} data - Upload data
     * @returns {Promise<Object>} Upload response
     */
    async uploadFile(dcslug, bucketName, data) {
        return this.client.post(`/objectstorage/${dcslug}/bucket/${bucketName}/upload/internal`, data);
    }

    /**
     * List access keys for a datacenter
     * @param {string} dcslug - Datacenter slug
     * @returns {Promise<Object>} List of access keys
     */
    async listAccessKeys(dcslug) {
        return this.client.get(`/objectstorage/${dcslug}/accesskeys/`);
    }

    /**
     * Create a new access key
     * @param {string} dcslug - Datacenter slug
     * @param {Object} [data] - Access key parameters
     * @returns {Promise<Object>} Created access key
     */
    async createAccessKey(dcslug, data = {}) {
        return this.client.post(`/objectstorage/${dcslug}/accesskey/create`, data);
    }

    /**
     * Modify access key status
     * @param {string} dcslug - Datacenter slug
     * @param {string} name - Access key name
     * @param {Object} data - Status data
     * @returns {Promise<Object>} Modification response
     */
    async modifyAccessKeyStatus(dcslug, name, data) {
        return this.client.post(`/objectstorage/${dcslug}/accesskey/${name}/status`, data);
    }
}

module.exports = ObjectStorageService;
