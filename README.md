# Utho JavaScript SDK

The official JavaScript Client for Utho Cloud API. This SDK provides a simple and modular way to interact with Utho's cloud services, including Cloud Servers, VPCs, Kubernetes, Object Storage, and more.

## Features

- **Modular Design**: Services are loaded lazily to ensure a small memory footprint and fast startup.
- **Promise-based**: All methods return Promises, making it easy to use with `async/await`.
- **Comprehensive Coverage**: Supports over 15+ Utho services.
- **Lightweight**: Minimal dependencies, built on top of the reliable `axios` library.

## Installation

```bash
npm install utho-sdk-js
```

## Getting Started

To use the Utho SDK, you need an API Key. You can generate one from the [Utho Console](https://console.utho.com/).

### Basic Usage

```javascript
const Utho = require('utho-sdk-js');

// Initialize the SDK with your API Key
const utho = new Utho('YOUR_API_KEY');

async function getAccountInfo() {
  try {
    const info = await utho.account.getInfo();
    console.log('Account Info:', info);
  } catch (error) {
    console.error('API Error:', error.message);
  }
}

getAccountInfo();
```

## Error Handling

The SDK throws errors when the API returns a non-2xx status code or if there are network issues. You should wrap your calls in `try/catch` blocks.

```javascript
try {
  const servers = await utho.cloudserver.list();
} catch (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error('Data:', error.response.data);
    console.error('Status:', error.response.status);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error:', error.message);
  }
}
```

## Documentation

The SDK is organized into services. Each service is accessible as a property of the main `Utho` instance.

| Service | Description | Examples |
| :--- | :--- | :--- |
| `account` | Manage your Utho account profile and billing. | [account.js](./examples/account.js) |
| `cloudserver` | List, create, and manage cloud servers. | [cloudserver.js](./examples/cloudserver.js) |
| `vpc` | Private networking and VPC management. | [vpc.js](./examples/vpc.js) |
| `database` | Managed Database clusters (MySQL, PostgreSQL, etc.). | [database.js](./examples/database.js) |
| `kubernetes` | Managed Kubernetes clusters (UK8s). | [kubernetes.js](./examples/kubernetes.js) |
| `objectstorage` | S3-compatible object storage buckets. | [objectstorage.js](./examples/objectstorage.js) |
| `loadbalancer` | High-availability load balancers. | [loadbalancer.js](./examples/loadbalancer.js) |
| `security` | Manage SSH keys and API keys. | [security.js](./examples/security.js) |
| `snapshots` | Create and manage server snapshots. | [snapshots.js](./examples/snapshots.js) |
| `sqs` | Simple Queue Service for message decoupling. | [sqs.js](./examples/sqs.js) |
| `ssl` | Manage SSL certificates. | [ssl.js](./examples/ssl.js) |
| `networking` | Manage DNS, IPs, and Firewalls. | [networking.js](./examples/networking.js) |
| `monitoring` | Access server metrics and alert policies. | [monitoring.js](./examples/monitoring.js) |

---

### Cloud Server Usage

```javascript
// List all cloud servers
const servers = await utho.cloudserver.list();

// Deploy a cloud server
const newServer = await utho.cloudserver.deploy({
    dcslug: 'in-mumbai-1',
    planid: '1',
    imageid: '1',
    hostname: 'my-server'
});

// Power actions (poweron, poweroff, reboot)
await utho.cloudserver.control('in-mumbai-1', 'cloud-id', 'reboot');
```

### Managed Database

```javascript
// List databases
const dbs = await utho.database.list();

// Create a database cluster
const newDb = await utho.database.create({
    name: 'prod-db',
    engine: 'mysql',
    dcslug: 'in-mumbai-1'
});
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Utho](https://utho.com)
