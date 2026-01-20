class AccountService {
    constructor(client) {
        this.client = client;
    }

    /**
     * Get account information
     * @returns {Promise<Object>} Account information
     */
    async getInfo() {
        return this.client.get('/account/info');
    }
}

module.exports = AccountService;
