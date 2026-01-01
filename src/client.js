const axios = require('axios');

class Client {
    constructor(apiKey, baseURL = 'https://api.utho.com') {
        this.apiKey = apiKey;
        this.baseURL = baseURL;
        this.client = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            }
        });
    }

    async get(path, params = {}) {
        try {
            const response = await this.client.get(path, { params });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async post(path, data = {}) {
        try {
            const response = await this.client.post(path, data);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async put(path, data = {}) {
        try {
            const response = await this.client.put(path, data);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async delete(path, data = {}) {
        try {
            const response = await this.client.delete(path, { data });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    handleError(error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            throw new Error(`Utho API Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
        } else if (error.request) {
            // The request was made but no response was received
            throw new Error(`Utho API Error: No response received - ${error.message}`);
        } else {
            // Something happened in setting up the request that triggered an Error
            throw new Error(`Utho API Error: ${error.message}`);
        }
    }
}

module.exports = Client;
