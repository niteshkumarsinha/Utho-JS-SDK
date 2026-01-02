# Utho JavaScript SDK

The official JavaScript Client for Utho Cloud API. This SDK provides a simple and modular way to interact with Utho's cloud services with 100% REST API parity.

## 🚀 Features

- **100% API Coverage**: Supports all 27+ Utho services including Cloud Servers, VPCs, Kubernetes, and more.
- **Modular Design**: Services are loaded lazily to ensure a small memory footprint and fast startup.
- **Promise-based**: Built for modern `async/await` workflows.
- **Lightweight**: Minimal dependencies, powered by the reliable `axios` library.

---

## 📦 Installation

Install via npm:

```bash
npm install utho-sdk-js
```

Or via yarn:

```bash
yarn add utho-sdk-js
```

---

## 🔑 Authentication

To use the SDK, you need an API Key. Generate one from the [Utho Console](https://console.utho.com/api-keys).

```javascript
const Utho = require('utho-sdk-js');

// Initialize the SDK
const utho = new Utho('YOUR_API_KEY');
```

---

## 📚 Service Reference & Examples

The SDK is organized into modular services. Each service is accessible as a property of the main `Utho` instance.

### 💻 Compute & Orchestration

#### Cloud Server
Deploy and manage virtual machines.
```javascript
// List servers
const servers = await utho.cloudserver.list();

// Deploy server
const newServer = await utho.cloudserver.deploy({
    dcslug: 'in-mumbai-1',
    planid: '1',
    imageid: '1',
    hostname: 'prod-web-01'
});

// Power control (poweron, poweroff, hardreboot, powercycle)
await utho.cloudserver.control('server-id', 'poweron');
```

#### Autoscaling
Automatically scale your capacity.
```javascript
const groups = await utho.autoscaling.list();
await utho.autoscaling.create({ name: 'web-asg', min_size: 2, max_size: 10 });
```

#### Stacks
Infrastructure as code / Blueprints.
```javascript
const stacks = await utho.stacks.list();
```

#### Snapshots & Backups
```javascript
// Snapshots
await utho.snapshots.list();
await utho.cloudserver.createSnapshot('server-id');

// Automated Backups
await utho.backups.list();
await utho.cloudserver.enableBackup('server-id');
```

---

### 🌐 Networking & Security

#### VPC (Virtual Private Cloud)
```javascript
const vpcs = await utho.vpc.list();
const subnets = await utho.vpc.listSubnets();
const eips = await utho.vpc.listElasticIPs();
```

#### Load Balancer & Target Groups
```javascript
const lbs = await utho.loadbalancer.list();
const targetGroups = await utho.targetgroup.list();

// Add Frontend to LB
await utho.loadbalancer.addFrontend('lb-id', { port: 443, protocol: 'https' });
```

#### Networking (DNS & Firewalls)
```javascript
// DNS
const domains = await utho.networking.listDomains();
await utho.networking.addDNSRecord('example.com', { type: 'A', value: '1.2.3.4' });

// Firewall
const firewalls = await utho.networking.listFirewalls();
await utho.networking.addFirewallRule('fw-id', { protocol: 'tcp', port: '80' });
```

#### WAF & IpSec
```javascript
const wafs = await utho.waf.list();
const vpns = await utho.ipsec.list();
```

---

### 🗄️ Database & Storage

#### Managed Database
```javascript
const dbs = await utho.database.list();
// Add a database to a cluster
await utho.database.addDatabase('cluster-id', { dbname: 'app_db' });
```

#### Object Storage & EBS
```javascript
// S3 Compatible Buckets
const buckets = await utho.objectstorage.listBuckets('in-mumbai-1');

// Block Storage (EBS)
const volumes = await utho.storage.list();
await utho.storage.attach('vol-id', { serverid: 'server-id' });
```

---

### 🛠️ Platform & Tools

#### Kubernetes (UK8s)
```javascript
const clusters = await utho.kubernetes.list();
const kubeconfig = await utho.kubernetes.download('cluster-id');
```

#### Registry, SQS & SSL
```javascript
await utho.registry.list();
await utho.sqs.list();
await utho.ssl.list();
```

---

### 👤 Account & Administration

#### Account & Sub-Users
```javascript
const info = await utho.account.getInfo();
const staff = await utho.subuser.list();
```

#### Activity & Actions
```javascript
const logs = await utho.activity.list();
const actions = await utho.actions.list();
```

---

## 🚨 Error Handling

The SDK uses standard Promise rejection for errors. You should use `try/catch` blocks.

```javascript
try {
    const result = await utho.cloudserver.list();
} catch (error) {
    console.error('API Error:', error.message);
    if (error.response) {
        console.error('Response Data:', error.response.data);
    }
}
```

---

## 📄 Documentation

Full interactive documentation is available in the `docs/` folder. Open `docs/index.html` in your browser.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## ⚖️ License

MIT © [Utho](https://utho.com)
