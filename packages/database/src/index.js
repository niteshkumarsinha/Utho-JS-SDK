class DatabaseService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all database clusters
     * @returns {Promise<Object>} List of database clusters
     */
    async list() {
        return this.client.get('/databases');
    }

    /**
     * Create a new database cluster
     * @param {Object} data - Database creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async create(data) {
        return this.client.post('/databases', data);
    }

    /**
     * Add a database to a cluster
     * @param {string} id - Database cluster ID
     * @param {Object} data - Database parameters
     * @returns {Promise<Object>} Addition response
     */
    async addDatabase(id, data) {
        return this.client.post(`/databases/${id}/database`, data);
    }

    /**
     * Delete a database from a cluster
     * @param {string} id - Database cluster ID
     * @param {string} dbname - Database name
     * @returns {Promise<Object>} Deletion response
     */
    async deleteDatabase(id, dbname) {
        return this.client.delete(`/databases/${id}/database/${dbname}`);
    }

    /**
     * Add a user to a database cluster
     * @param {string} id - Database cluster ID
     * @param {Object} data - User parameters
     * @returns {Promise<Object>} Addition response
     */
    async addUser(id, data) {
        return this.client.post(`/databases/${id}/user`, data);
    }

    /**
     * Delete a user from a database cluster
     * @param {string} db_id - Database cluster ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteUser(db_id) {
        return this.client.delete(`/databases/${db_id}/user`);
    }

    /**
     * Update database permissions for a user
     * @param {string} id - Database cluster ID
     * @param {string} dbname - Database name
     * @param {Object} data - Permission parameters
     * @returns {Promise<Object>} Update response
     */
    async updatePermissions(id, dbname, data) {
        return this.client.post(`/databases/${id}/database/${dbname}/user`, data);
    }

    /**
     * Add a trusted host ip address to a database cluster
     * @param {string} id - Database cluster ID
     * @param {Object} data - Host parameters
     * @returns {Promise<Object>} Addition response
     */
    async addTrustedHost(id, data) {
        return this.client.post(`/databases/${id}/trustedhost/`, data);
    }

    /**
     * Delete a trusted host from a database cluster
     * @param {string} id - Database cluster ID
     * @param {string} trustedhost_ip - Trusted host IP address
     * @returns {Promise<Object>} Deletion response
     */
    async deleteTrustedHost(id, trustedhost_ip) {
        return this.client.delete(`/databases/${id}/trustedhost/${trustedhost_ip}`);
    }

    /**
     * Download CA certificate
     * @param {string} db_id - Database cluster ID
     * @param {string} cloud_id - Cloud server ID
     * @returns {Promise<Object>} CA Certificate
     */
    async downloadCertificate(db_id, cloud_id) {
        return this.client.get(`/databases/${db_id}/${cloud_id}/certificate`);
    }

    /**
     * Create a backup
     * @param {string} db_id - Database cluster ID
     * @returns {Promise<Object>} Backup response
     */
    async createBackup(db_id) {
        return this.client.post(`/databases/${db_id}/backup`);
    }

    /**
     * Add firewall to database cluster
     * @param {string} db_id - Database cluster ID
     * @param {string} firewall_id - Firewall ID
     * @returns {Promise<Object>} Attachment response
     */
    async addFirewall(db_id, firewall_id) {
        return this.client.post(`/databases/${db_id}/securitygroup/${firewall_id}`);
    }

    /**
     * Detach firewall from database cluster
     * @param {string} db_id - Database cluster ID
     * @param {string} firewall_id - Firewall ID
     * @returns {Promise<Object>} Detachment response
     */
    async detachFirewall(db_id, firewall_id) {
        return this.client.delete(`/databases/${db_id}/securitygroup/${firewall_id}`);
    }
}

module.exports = DatabaseService;
