class MonitoringService {
    constructor(client) {
        this.client = client;
    }

    /**
     * List all alert policies
     * @returns {Promise<Object>} List of alert policies
     */
    /**
     * List all monitoring contacts
     * @returns {Promise<Object>} List of contacts
     */
    async listContacts() {
        return this.client.get('/alert/contact/list');
    }

    /**
     * Add a monitoring contact
     * @param {Object} data - Contact parameters
     * @returns {Promise<Object>} Addition response
     */
    async addContact(data) {
        return this.client.post('/alert/contact/add', data);
    }

    /**
     * Update a monitoring contact
     * @param {string} id - Contact ID
     * @param {Object} data - Update parameters
     * @returns {Promise<Object>} Update response
     */
    async updateContact(id, data) {
        return this.client.put(`/alert/contact/${id}/update`, data);
    }

    /**
     * Delete a monitoring contact
     * @param {string} id - Contact ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteContact(id) {
        return this.client.delete(`/alert/contact/${id}/delete`);
    }

    /**
     * List all monitoring alerts
     * @returns {Promise<Object>} List of alerts
     */
    async listAlerts() {
        return this.client.get('/alert');
    }

    /**
     * Add a monitoring alert
     * @param {Object} data - Alert parameters
     * @returns {Promise<Object>} Addition response
     */
    async addAlert(data) {
        return this.client.post('/alert', data);
    }

    /**
     * Delete a monitoring alert
     * @param {string} alert_id - Alert ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteAlert(alert_id) {
        return this.client.delete(`/alert/${alert_id}/delete`);
    }
}

module.exports = MonitoringService;
