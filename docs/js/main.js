document.addEventListener('DOMContentLoaded', () => {
    const serviceContent = document.getElementById('serviceContent');
    const serviceSearch = document.getElementById('serviceSearch');
    const serviceList = document.getElementById('serviceList');

    // Data for services
    const services = [
        {
            id: 'account',
            title: 'Account',
            description: 'Manage your Utho account profile and billing info.',
            methods: [
                { name: 'getInfo()', path: '/account/info', desc: 'Get account detailed information.' }
            ],
            example: 'const info = await utho.account.getInfo();'
        },
        {
            id: 'actions',
            title: 'Actions',
            description: 'List and view details of historical account actions.',
            methods: [
                { name: 'list()', path: '/v2/actions/', desc: 'List all historical actions.' },
                { name: 'get(id)', path: '/actions/:id', desc: 'Get details for a specific action.' }
            ],
            example: "const actions = await utho.actions.list();\nconst detail = await utho.actions.get('action-123');"
        },
        {
            id: 'activity',
            title: 'Activity Logs',
            description: 'Access detailed activity logs for your account.',
            methods: [
                { name: 'list()', path: '/activity', desc: 'Retrieve all account activity logs.' }
            ],
            example: 'const logs = await utho.activity.list();'
        },
        {
            id: 'autoscaling',
            title: 'Autoscaling',
            description: 'Automatically scale your server fleet based on demand.',
            methods: [
                { name: 'list()', path: '/autoscaling', desc: 'List all autoscaling groups.' },
                { name: 'create(data)', path: '/autoscaling/create', desc: 'Create a new autoscaling group.' },
                { name: 'delete(id)', path: '/autoscaling/:id/delete', desc: 'Delete an autoscaling group.' },
                { name: 'update(id, data)', path: '/autoscaling/:id', desc: 'Update group configuration.' }
            ],
            example: "const groups = await utho.autoscaling.list();\nawait utho.autoscaling.create({ name: 'web-group', min_size: 1, max_size: 5 });"
        },
        {
            id: 'backups',
            title: 'Backups',
            description: 'Manage automated server backups and restoration.',
            methods: [
                { name: 'list()', path: '/backups', desc: 'List all backups.' },
                { name: 'delete(id)', path: '/backups/:id', desc: 'Delete a backup.' },
                { name: 'restore(id, data)', path: '/backups/:id/restore', desc: 'Restore from a backup.' }
            ],
            example: "const backups = await utho.backups.list();\nawait utho.backups.restore('backup-123', { serverid: 'server-456' });"
        },
        {
            id: 'cloudserver',
            title: 'Cloud Server',
            description: 'Deploy and manage high-performance cloud servers.',
            methods: [
                { name: 'list()', path: '/cloud/', desc: 'List all cloud servers.' },
                { name: 'get(id)', path: '/cloud/:id', desc: 'Get server details.' },
                { name: 'deploy(data)', path: '/cloud/deploy/', desc: 'Deploy a new server.' },
                { name: 'control(id, action)', path: '/cloud/:id/:action/', desc: 'Power actions (poweron, poweroff, hardreboot, powercycle).' },
                { name: 'delete(id)', path: '/cloud/:id/destroy', desc: 'Destroy a cloud server.' },
                { name: 'createSnapshot(id)', path: '/cloud/:id/snapshot/create/', desc: 'Create a server snapshot.' },
                { name: 'enableRescue(id, data)', path: '/cloud/:id/enablerescue', desc: 'Enable rescue mode.' },
                { name: 'disableRescue(id)', path: '/cloud/:id/disablerescue', desc: 'Disable rescue mode.' },
                { name: 'mountISO(id, data)', path: '/cloud/:id/mountiso', desc: 'Mount an ISO image.' },
                { name: 'unmountISO(id)', path: '/cloud/:id/umountiso', desc: 'Unmount ISO image.' },
                { name: 'assignPublicIP(id, data)', path: '/cloud/:id/assignpublicip', desc: 'Assign a public IP.' },
                { name: 'deletePublicIP(id, ip)', path: '/cloud/:id/ip/:ip/delete', desc: 'Remove a public IP.' },
                { name: 'enableBackup(id)', path: '/cloud/:id/backups/enable', desc: 'Enable automated backups.' },
                { name: 'disableBackup(id)', path: '/cloud/:id/backups/disable', desc: 'Disable automated backups.' }
            ],
            example: "const servers = await utho.cloudserver.list();\nawait utho.cloudserver.control('123', 'reboot');"
        },
        {
            id: 'database',
            title: 'Database',
            description: 'Managed database clusters with high availability.',
            methods: [
                { name: 'list()', path: '/databases', desc: 'List all database clusters.' },
                { name: 'create(data)', path: '/databases', desc: 'Provision a new database cluster.' },
                { name: 'get(id)', path: '/databases/:id', desc: 'Get cluster details.' },
                { name: 'delete(id)', path: '/databases/:id', desc: 'Delete a cluster.' },
                { name: 'addDatabase(id, data)', path: '/databases/:id/database', desc: 'Add database to cluster.' },
                { name: 'addUser(id, data)', path: '/databases/:id/user', desc: 'Add user to cluster.' },
                { name: 'addFirewall(id, fwId)', path: '/databases/:id/securitygroup/:fwId', desc: 'Attach a firewall.' },
                { name: 'createBackup(id)', path: '/databases/:id/backup', desc: 'Create a manual backup.' }
            ],
            example: "const dbs = await utho.database.list();\nawait utho.database.addUser('db-123', { username: 'app_user', password: '...' });"
        },
        {
            id: 'ipsec',
            title: 'IpSec (VPN)',
            description: 'Secure site-to-site VPN connections.',
            methods: [
                { name: 'list()', path: '/ipsec', desc: 'List all connection logs.' },
                { name: 'create(data)', path: '/ipsec', desc: 'Create a new connection.' },
                { name: 'update(data)', path: '/ipsec', desc: 'Update connection settings.' },
                { name: 'delete()', path: '/ipsec', desc: 'Delete connection.' }
            ],
            example: "const conns = await utho.ipsec.list();\nawait utho.ipsec.create({ name: 'office-vpn', ... });"
        },
        {
            id: 'iso',
            title: 'ISO',
            description: 'Manage custom ISO images for server installation.',
            methods: [
                { name: 'list()', path: '/iso', desc: 'List all custom ISOs.' },
                { name: 'add(data)', path: '/iso/add', desc: 'Add a new custom ISO.' },
                { name: 'delete(id)', path: '/iso/:id/delete', desc: 'Delete a custom ISO.' }
            ],
            example: "const isos = await utho.iso.list();\nawait utho.iso.add({ name: 'ubuntu-custom', url: 'https://...' });"
        },
        {
            id: 'kubernetes',
            title: 'Kubernetes',
            description: 'Ready-to-use managed Kubernetes clusters.',
            methods: [
                { name: 'list()', path: '/v2/kubernetes', desc: 'List all K8s clusters.' },
                { name: 'create(data)', path: '/kubernetes/deploy', desc: 'Deploy a new cluster.' },
                { name: 'get(id)', path: '/kubernetes/:id', desc: 'Get cluster details.' },
                { name: 'delete(id)', path: '/kubernetes/:id/destroy', desc: 'Delete a cluster.' },
                { name: 'download(id)', path: '/kubernetes/:id/download', desc: 'Download kubeconfig.' }
            ],
            example: "const clusters = await utho.kubernetes.list();\nconst config = await utho.kubernetes.download('k8s-123');"
        },
        {
            id: 'loadbalancer',
            title: 'Load Balancer',
            description: 'Distribute traffic across multiple cloud servers.',
            methods: [
                { name: 'list()', path: '/loadbalancer/', desc: 'List all load balancers.' },
                { name: 'create(data)', path: '/loadbalancer/add/', desc: 'Create a new load balancer.' },
                { name: 'get(id)', path: '/loadbalancer/:id/', desc: 'Get balancer details.' },
                { name: 'update(id, data)', path: '/loadbalancer/:id/update', desc: 'Update configuration.' },
                { name: 'delete(id)', path: '/loadbalancer/:id/destroy/', desc: 'Destroy load balancer.' },
                { name: 'addACL(id, data)', path: '/loadbalancer/:id/acl/', desc: 'Add an ACL rule.' },
                { name: 'addFrontend(id, data)', path: '/loadbalancer/:id/frontend', desc: 'Add a frontend listener.' },
                { name: 'addBackend(id, data)', path: '/loadbalancer/:id/backend/', desc: 'Add a backend target.' }
            ],
            example: "const lbs = await utho.loadbalancer.list();\nawait utho.loadbalancer.addFrontend('lb-123', { port: 80, protocol: 'http' });"
        },
        {
            id: 'monitoring',
            title: 'Monitoring',
            description: 'Real-time metrics and configurable alerts.',
            methods: [
                { name: 'listContacts()', path: '/alert/contact/list', desc: 'List alert contacts.' },
                { name: 'addContact(data)', path: '/alert/contact/add', desc: 'Add a contact.' },
                { name: 'listAlerts()', path: '/alert', desc: 'List all active alerts.' },
                { name: 'addAlert(data)', path: '/alert', desc: 'Create a new alert policy.' },
                { name: 'deleteAlert(id)', path: '/alert/:id/delete', desc: 'Delete an alert policy.' }
            ],
            example: "const alerts = await utho.monitoring.listAlerts();\nawait utho.monitoring.addContact({ name: 'Admin', email: '...' });"
        },
        {
            id: 'networking',
            title: 'Networking & DNS',
            description: 'Global DNS management and Cloud Firewalls.',
            methods: [
                { name: 'listDomains()', path: '/dns', desc: 'List all DNS domains.' },
                { name: 'createDomain(data)', path: '/dns/adddomain', desc: 'Add a new domain.' },
                { name: 'addDNSRecord(domain, data)', path: '/dns/:domain/record/add/', desc: 'Add a DNS record.' },
                { name: 'listFirewalls()', path: '/firewall', desc: 'List all firewalls.' },
                { name: 'createFirewall(data)', path: '/firewall/create', desc: 'Create a new firewall.' },
                { name: 'addFirewallRule(fwId, data)', path: '/firewall/:id/rule/add', desc: 'Add a firewall rule.' }
            ],
            example: "const domains = await utho.networking.listDomains();\nawait utho.networking.addDNSRecord('example.com', { type: 'A', value: '...' });"
        },
        {
            id: 'objectstorage',
            title: 'Object Storage',
            description: 'S3-compatible object storage for static files.',
            methods: [
                { name: 'listBuckets(dc)', path: '/objectstorage/:dc/bucket', desc: 'List all buckets.' },
                { name: 'createBucket(data)', path: '/objectstorage/bucket/create/', desc: 'Create a new bucket.' },
                { name: 'deleteBucket(dc, name)', path: '/objectstorage/:dc/bucket/:name/delete/', desc: 'Delete a bucket.' },
                { name: 'listAccessKeys(dc)', path: '/objectstorage/:dc/accesskeys/', desc: 'List access keys.' },
                { name: 'createAccessKey(dc)', path: '/objectstorage/:dc/accesskey/create', desc: 'Generate new key.' }
            ],
            example: "const buckets = await utho.objectstorage.listBuckets('in-mumbai-1');"
        },
        {
            id: 'registry',
            title: 'Registry',
            description: 'Secure, private container image registries.',
            methods: [
                { name: 'list()', path: '/registry', desc: 'List all registries.' },
                { name: 'create(data)', path: '/registry', desc: 'Create a registry.' },
                { name: 'delete(id)', path: '/registry/:id', desc: 'Delete a registry.' }
            ],
            example: "const registries = await utho.registry.list();\nawait utho.registry.create({ name: 'my-repo' });"
        },
        {
            id: 'security',
            title: 'Security',
            description: 'Manage SSH keys and API secure access keys.',
            methods: [
                { name: 'listSSHKeys()', path: '/key', desc: 'List all SSH keys.' },
                { name: 'importSSHKey(data)', path: '/key/import', desc: 'Import a new SSH key.' },
                { name: 'deleteSSHKey(id)', path: '/key/:id/delete', desc: 'Delete an SSH key.' },
                { name: 'listAPIKeys()', path: '/api', desc: 'List all API keys.' },
                { name: 'generateAPIKey(data)', path: '/api/generate', desc: 'Generate a new API key.' },
                { name: 'deleteAPIKey(id)', path: '/api/:id/delete', desc: 'Delete an API key.' }
            ],
            example: "const keys = await utho.security.listSSHKeys();\nawait utho.security.deleteSSHKey('key-123');"
        },
        {
            id: 'snapshots',
            title: 'Snapshots',
            description: 'Capture point-in-time images of your servers.',
            methods: [
                { name: 'list()', path: '/snapshot', desc: 'List all snapshots.' },
                { name: 'delete(cloudid, snapshotid)', path: '/cloud/:cid/snapshot/:sid/delete', desc: 'Delete a snapshot.' },
                { name: 'restore(cloudid, snapshotid)', path: '/cloud/:cid/snapshot/:sid/restore', desc: 'Restore a snapshot.' }
            ],
            example: "const snaps = await utho.snapshots.list();"
        },
        {
            id: 'sqs',
            title: 'SQS',
            description: 'Fully managed distributed message queuing.',
            methods: [
                { name: 'list()', path: '/sqs', desc: 'List all SQS instances.' },
                { name: 'create(data)', path: '/sqs', desc: 'Create a new SQS.' },
                { name: 'get(id)', path: '/sqs/:id', desc: 'Get SQS details.' },
                { name: 'delete(id)', path: '/sqs/:id/destroy', desc: 'Delete an SQS instance.' }
            ],
            example: "const queues = await utho.sqs.list();\nawait utho.sqs.create({ name: 'jobs-queue' });"
        },
        {
            id: 'ssl',
            title: 'SSL Certificates',
            description: 'Secure your services with SSL/TLS certificates.',
            methods: [
                { name: 'list()', path: '/certificates', desc: 'List all SSL certificates.' },
                { name: 'create(data)', path: '/certificates', desc: 'Provision a certificate.' },
                { name: 'delete(id)', path: '/certificates/:id', desc: 'Delete a certificate.' }
            ],
            example: "const certs = await utho.ssl.list();"
        },
        {
            id: 'stacks',
            title: 'Stacks',
            description: 'Blueprint-based infrastructure automation.',
            methods: [
                { name: 'list()', path: '/stacks', desc: 'List all automation stacks.' },
                { name: 'create(data)', path: '/stacks', desc: 'Create a new stack.' },
                { name: 'update(id, data)', path: '/stacks/:id', desc: 'Update stack config.' },
                { name: 'delete(id)', path: '/stacks/:id', desc: 'Delete a stack.' }
            ],
            example: "const stacks = await utho.stacks.list();\nawait utho.stacks.create({ title: 'Lamp Stack', ... });"
        },
        {
            id: 'storage',
            title: 'Storage (EBS)',
            description: 'Elastic Block Storage for cloud servers.',
            methods: [
                { name: 'list()', path: '/ebs', desc: 'List all EBS volumes.' },
                { name: 'create(data)', path: '/ebs', desc: 'Create an EBS volume.' },
                { name: 'resize(id, data)', path: '/ebs/:id/resize', desc: 'Resize a volume.' },
                { name: 'attach(id, data)', path: '/ebs/:id/attach', desc: 'Attach to server.' },
                { name: 'detach(id)', path: '/ebs/:id/dettach', desc: 'Detach from server.' },
                { name: 'delete(id)', path: '/ebs/:id/destroy', desc: 'Delete a volume.' }
            ],
            example: "const volumes = await utho.storage.list();\nawait utho.storage.attach('vol-123', { serverid: '456' });"
        },
        {
            id: 'subuser',
            title: 'Sub-Users',
            description: 'Manage sub-accounts and staff permissions.',
            methods: [
                { name: 'list()', path: '/user', desc: 'List all sub-users.' },
                { name: 'create(data)', path: '/user', desc: 'Create a new sub-user.' },
                { name: 'get(id)', path: '/user/:id', desc: 'Get sub-user details.' },
                { name: 'update(id, data)', path: '/user/:id', desc: 'Update sub-user.' },
                { name: 'delete(id)', path: '/user/:id', desc: 'Delete a sub-user.' }
            ],
            example: "const users = await utho.subuser.list();\nawait utho.subuser.create({ email: 'staff@example.com', ... });"
        },
        {
            id: 'targetgroup',
            title: 'Target Group',
            description: 'Manage backend target groups for load balancers.',
            methods: [
                { name: 'list()', path: '/targetgroup', desc: 'List all target groups.' },
                { name: 'create(data)', path: '/targetgroup', desc: 'Create a new target group.' },
                { name: 'update(id, data)', path: '/targetgroup/:id', desc: 'Update target group.' },
                { name: 'delete(id)', path: '/targetgroup/:id', desc: 'Delete a target group.' }
            ],
            example: "const groups = await utho.targetgroup.list();\nawait utho.targetgroup.create({ name: 'api-targets', ... });"
        },
        {
            id: 'transfer',
            title: 'Resource Transfer',
            description: 'Securely move resources between accounts.',
            methods: [
                { name: 'initiate(type, id)', path: '/transfer/:type/:id/', desc: 'Start a resource transfer.' },
                { name: 'receive(data)', path: '/transfer/process/', desc: 'Receive a resource.' }
            ],
            example: "await utho.transfer.initiate('cloud', 'server-123');"
        },
        {
            id: 'vpc',
            title: 'Virtual Private Cloud',
            description: 'Isolated private networks with subnets and routing.',
            methods: [
                { name: 'list()', path: '/vpc/', desc: 'List all VPC networks.' },
                { name: 'create(data)', path: '/vpc/create', desc: 'Create a new VPC.' },
                { name: 'delete(id)', path: '/vpc/:id', desc: 'Delete a VPC.' },
                { name: 'listSubnets()', path: '/vpc/subnet', desc: 'List all subnets.' },
                { name: 'createSubnet(data)', path: '/vpc/subnet/create', desc: 'Create a new subnet.' },
                { name: 'listElasticIPs()', path: '/elasticip', desc: 'List all Elastic IPs.' },
                { name: 'allocateElasticIP(data)', path: '/elasticip/allocate', desc: 'Allocate a new IP.' }
            ],
            example: "const subnets = await utho.vpc.listSubnets();\nawait utho.vpc.allocateElasticIP({ dcslug: 'in-mumbai-1' });"
        },
        {
            id: 'vpn',
            title: 'VPN (Legacy)',
            description: 'Old VPN management endpoints.',
            methods: [
                { name: 'list()', path: '/vpn', desc: 'List all VPN instances.' },
                { name: 'create(data)', path: '/vpn/create', desc: 'Deploy a new VPN.' },
                { name: 'delete(id)', path: '/vpn/:id/delete', desc: 'Delete a VPN instance.' }
            ],
            example: "const vpns = await utho.vpn.list();"
        },
        {
            id: 'waf',
            title: 'WAF',
            description: 'Enterprise Web Application Firewall.',
            methods: [
                { name: 'list()', path: '/waf/list', desc: 'List all WAF instances.' },
                { name: 'create(data)', path: '/waf/create', desc: 'Provision a new WAF.' },
                { name: 'attachRule(data)', path: '/waf/attach_rule', desc: 'Enable a WAF rule.' },
                { name: 'detachRule(data)', path: '/waf/detach_rule', desc: 'Disable a WAF rule.' },
                { name: 'createWAFInstance(data)', path: '/waf/create_waf_instance', desc: 'Attach LB to WAF.' },
                { name: 'delete(data)', path: '/waf/delete', desc: 'Destroy a WAF.' }
            ],
            example: "const wafs = await utho.waf.list();"
        }
    ];

    // Generate service sections
    services.forEach(service => {
        const section = document.createElement('div');
        section.id = service.id;
        section.className = 'content-section';

        const methodsHtml = service.methods.map(m => `
            <tr>
                <td class="method-name">${m.name}</td>
                <td><span class="badge">${m.path}</span></td>
                <td>${m.desc}</td>
            </tr>
        `).join('');

        section.innerHTML = `
            <h1>${service.title}</h1>
            <p>${service.description}</p>
            
            <h3>Available Methods</h3>
            <div class="table-container">
                <table class="method-table">
                    <thead>
                        <tr>
                            <th>Method</th>
                            <th>Endpoint</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${methodsHtml}
                    </tbody>
                </table>
            </div>

            <div class="example-header">
                <h3>Usage Example</h3>
                <button class="copy-btn">Copy Code</button>
            </div>
            <div class="code-block">
                <div class="code-header">JAVASCRIPT</div>
                <pre><code>${service.example}</code></pre>
            </div>
        `;

        const copyBtn = section.querySelector('.copy-btn');
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(service.example).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.classList.remove('copied');
                }, 2000);
            });
        });

        serviceContent.appendChild(section);
    });

    // Navigation logic - use dynamic query to find all sections
    const handleNavigation = (targetId) => {
        // Update active link
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href').substring(1);
            if (href === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Toggle sections
        document.querySelectorAll('.content-section').forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    };

    // Attach listeners to all nav links (static and dynamic)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            handleNavigation(targetId);
        });
    });

    // Service Search
    serviceSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        Array.from(serviceList.children).forEach(li => {
            const text = li.textContent.toLowerCase();
            li.style.display = text.includes(query) ? '' : 'none';
        });
    });

    // Handle initial hash or default to intro
    const initialHash = window.location.hash.substring(1) || 'intro';
    handleNavigation(initialHash);
});
