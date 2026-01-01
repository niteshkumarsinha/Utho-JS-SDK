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
            id: 'cloudserver',
            title: 'Cloud Server',
            description: 'Deploy and manage high-performance cloud servers.',
            methods: [
                { name: 'list()', path: '/cloud/list', desc: 'List all cloud servers.' },
                { name: 'get(dc, id)', path: '/cloud/:dc/:id/info', desc: 'Get server details.' },
                { name: 'deploy(data)', path: '/cloud/deploy', desc: 'Deploy a new server.' },
                { name: 'control(dc, id, action)', path: '/cloud/:dc/:id/action', desc: 'Power on/off/reboot.' },
                { name: 'delete(data)', path: '/cloud/delete', desc: 'Delete a cloud server.' }
            ],
            example: "const servers = await utho.cloudserver.list();\nawait utho.cloudserver.control('in-mumbai-1', '123', 'reboot');"
        },
        {
            id: 'vpc',
            title: 'VPC',
            description: 'Create isolated private networks for your resources.',
            methods: [
                { name: 'list()', path: '/vpc/', desc: 'List all VPCs.' },
                { name: 'create(data)', path: '/vpc/', desc: 'Create a new VPC.' }
            ],
            example: 'const vpcs = await utho.vpc.list();'
        },
        {
            id: 'loadbalancer',
            title: 'Load Balancer',
            description: 'Distribute traffic across multiple servers.',
            methods: [
                { name: 'list()', path: '/loadbalancer/list', desc: 'List all load balancers.' },
                { name: 'create(data)', path: '/loadbalancer/create', desc: 'Create a new load balancer.' },
                { name: 'delete(data)', path: '/loadbalancer/delete', desc: 'Delete a load balancer.' }
            ],
            example: 'const lbs = await utho.loadbalancer.list();'
        },
        {
            id: 'database',
            title: 'Database',
            description: 'Managed database clusters with automatic backups.',
            methods: [
                { name: 'list()', path: '/databases', desc: 'List all database clusters.' },
                { name: 'create(data)', path: '/databases', desc: 'Provision a new database.' }
            ],
            example: 'const dbs = await utho.database.list();'
        },
        {
            id: 'kubernetes',
            title: 'Kubernetes',
            description: 'Ready-to-use managed K8s clusters.',
            methods: [
                { name: 'list()', path: '/kubernetes/', desc: 'List all K8s clusters.' },
                { name: 'create(data)', path: '/kubernetes/deploy', desc: 'Deploy a new cluster.' }
            ],
            example: 'const clusters = await utho.kubernetes.list();'
        },
        {
            id: 'objectstorage',
            title: 'Object Storage',
            description: 'S3-compatible storage for your static assets.',
            methods: [
                { name: 'listBuckets(dc)', path: '/objectstorage/:dc/bucket', desc: 'List all buckets.' },
                { name: 'createBucket(data)', path: '/objectstorage/bucket/create', desc: 'Create a new bucket.' }
            ],
            example: "const buckets = await utho.objectstorage.listBuckets('in-mumbai-1');"
        },
        {
            id: 'security',
            title: 'Security',
            description: 'Manage SSH keys and API keys.',
            methods: [
                { name: 'listSSHKeys()', path: '/key', desc: 'List all SSH keys.' },
                { name: 'importSSHKey(data)', path: '/key/import', desc: 'Import a new SSH key.' },
                { name: 'listAPIKeys()', path: '/api', desc: 'List all API keys.' }
            ],
            example: 'const keys = await utho.security.listSSHKeys();'
        },
        {
            id: 'snapshots',
            title: 'Snapshots',
            description: 'Server snapshots for backup and migration.',
            methods: [
                { name: 'list()', path: '/snapshots', desc: 'List all snapshots.' },
                { name: 'create(data)', path: '/snapshots/create', desc: 'Create a new snapshot.' }
            ],
            example: 'await utho.snapshots.list();'
        },
        {
            id: 'sqs',
            title: 'SQS',
            description: 'Fully managed message queuing service.',
            methods: [
                { name: 'list()', path: '/sqs', desc: 'List all SQS queues.' }
            ],
            example: 'const queues = await utho.sqs.list();'
        },
        {
            id: 'ssl',
            title: 'SSL Certificates',
            description: 'Manage SSL certificates for your domains.',
            methods: [
                { name: 'list()', path: '/certificates', desc: 'List all certificates.' }
            ],
            example: 'const certs = await utho.ssl.list();'
        },
        {
            id: 'networking',
            title: 'Networking',
            description: 'DNS, Firewalls, and IP management.',
            methods: [
                { name: 'listDomains()', path: '/dns', desc: 'List DNS domains.' },
                { name: 'listFirewalls()', path: '/firewall', desc: 'List all firewalls.' }
            ],
            example: 'const domains = await utho.networking.listDomains();'
        },
        {
            id: 'monitoring',
            title: 'Monitoring',
            description: 'Real-time metrics and alerts.',
            methods: [
                { name: 'listAlertPolicies()', path: '/monitoring/alerts', desc: 'List alert policies.' }
            ],
            example: 'const stats = await utho.monitoring.listAlertPolicies();'
        },
        {
            id: 'autoscaling',
            title: 'Autoscaling',
            description: 'Automatically scale your server fleet.',
            methods: [
                { name: 'list()', path: '/autoscaling', desc: 'List autoscaling groups.' }
            ],
            example: 'const groups = await utho.autoscaling.list();'
        },
        {
            id: 'backups',
            title: 'Backups',
            description: 'Automated server backups.',
            methods: [
                { name: 'list()', path: '/backups', desc: 'List all backups.' }
            ],
            example: 'const backups = await utho.backups.list();'
        },
        {
            id: 'iso',
            title: 'ISO',
            description: 'Manage custom ISO images.',
            methods: [
                { name: 'list()', path: '/iso/list', desc: 'List all ISOs.' },
                { name: 'add(data)', path: '/iso/add', desc: 'Add a new ISO.' },
                { name: 'delete(data)', path: '/iso/delete', desc: 'Delete an ISO.' }
            ],
            example: 'const isos = await utho.iso.list();'
        },
        {
            id: 'registry',
            title: 'Registry',
            description: 'Secure container image registries.',
            methods: [
                { name: 'list()', path: '/registry', desc: 'List all registries.' }
            ],
            example: 'const registries = await utho.registry.list();'
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
