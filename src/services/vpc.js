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
     * List all subnets
     * @returns {Promise<Object>} List of subnets
     */
    async listSubnets() {
        return this.client.get('/vpc/subnet');
    }

    /**
     * Create a new subnet
     * @param {Object} data - Subnet creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async createSubnet(data) {
        return this.client.post('/vpc/subnet/create', data);
    }

    /**
     * Delete a subnet
     * @param {string} id - Subnet ID
     * @returns {Promise<Object>} Deletion response
     */
    async deleteSubnet(id) {
        return this.client.delete(`/vpc/subnet/${id}`);
    }

    /**
     * Associate a subnet with a route table
     * @param {Object} data - Association parameters
     * @returns {Promise<Object>} Association response
     */
    async associateSubnet(data) {
        return this.client.post('/vpc/subnet/associate', data);
    }

    /**
     * List associated subnets
     * @returns {Promise<Object>} List of associated subnets
     */
    async listAssociatedSubnets() {
        return this.client.get('/vpc/subnet/associate');
    }

    /**
     * Get NAT Gateway details
     * @returns {Promise<Object>} NAT Gateway details
     */
    async getNATGateway() {
        return this.client.get('/vpc/natgateway');
    }

    /**
     * Create a NAT Gateway
     * @param {Object} data - NAT Gateway creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async createNATGateway(data) {
        return this.client.post('/vpc/natgateway', data);
    }

    /**
     * Delete a NAT Gateway
     * @returns {Promise<Object>} Deletion response
     */
    async deleteNATGateway() {
        return this.client.delete('/vpc/natgateway');
    }

    /**
     * List all Elastic IPs
     * @returns {Promise<Object>} List of Elastic IPs
     */
    async listElasticIPs() {
        return this.client.get('/elasticip');
    }

    /**
     * Allocate an Elastic IP
     * @param {Object} data - Allocation parameters
     * @returns {Promise<Object>} Allocation response
     */
    async allocateElasticIP(data) {
        return this.client.post('/elasticip/allocate', data);
    }

    /**
     * Deallocate an Elastic IP
     * @param {string} ip - Elastic IP address
     * @returns {Promise<Object>} Deallocation response
     */
    async deallocateElasticIP(ip) {
        return this.client.post(`/elasticip/${ip}/deallocate`);
    }

    /**
     * Create a peering connection
     * @param {Object} data - Peering parameters
     * @returns {Promise<Object>} Connection response
     */
    async createPeering(data) {
        return this.client.post('/vpc/peering', data);
    }

    /**
     * Update a VPC route
     * @param {Object} data - Route update parameters
     * @returns {Promise<Object>} Update response
     */
    async updateRoute(data) {
        return this.client.post('/vpc/route', data);
    }

    /**
     * List VPC routes
     * @returns {Promise<Object>} List of VPC routes
     */
    async listRoutes() {
        return this.client.get('/vpc-route');
    }

    /**
     * Get Internet Gateway details
     * @returns {Promise<Object>} Internet Gateway details
     */
    async getInternetGateway() {
        return this.client.get('/vpc-internetgateway');
    }

    /**
     * Create an Internet Gateway
     * @param {Object} data - Internet Gateway creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async createInternetGateway(data) {
        return this.client.post('/vpc-internetgateway', data);
    }

    /**
     * List route tables
     * @returns {Promise<Object>} List of route tables
     */
    async listRouteTables() {
        return this.client.get('/vpc-route-table');
    }

    /**
     * Create a route table
     * @param {Object} data - Route table creation parameters
     * @returns {Promise<Object>} Creation response
     */
    async createRouteTable(data) {
        return this.client.post('/vpc-route-table', data);
    }
}

module.exports = VPCService;
