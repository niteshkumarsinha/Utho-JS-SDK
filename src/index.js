const UthoClient = require('./client');

/**
 * Utho SDK Main Class
 */
class Utho {
    /**
     * Create a new Utho SDK instance
     * @param {string} apiKey - Your Utho API key
     */
    constructor(apiKey) {
        if (!apiKey) {
            throw new Error('API Key is required');
        }
        this.client = new UthoClient(apiKey);
    }

    get account() {
        if (!this._account) {
            const AccountService = require('@utho/sdk-account');
            this._account = new AccountService(this.client);
        }
        return this._account;
    }

    get cloudserver() {
        if (!this._cloudserver) {
            const CloudServerService = require('@utho/sdk-cloudserver');
            this._cloudserver = new CloudServerService(this.client);
        }
        return this._cloudserver;
    }

    get vpc() {
        if (!this._vpc) {
            const VPCService = require('@utho/sdk-vpc');
            this._vpc = new VPCService(this.client);
        }
        return this._vpc;
    }

    get loadbalancer() {
        if (!this._loadbalancer) {
            const LoadBalancerService = require('@utho/sdk-loadbalancer');
            this._loadbalancer = new LoadBalancerService(this.client);
        }
        return this._loadbalancer;
    }

    get database() {
        if (!this._database) {
            const DatabaseService = require('@utho/sdk-database');
            this._database = new DatabaseService(this.client);
        }
        return this._database;
    }

    get kubernetes() {
        if (!this._kubernetes) {
            const KubernetesService = require('@utho/sdk-kubernetes');
            this._kubernetes = new KubernetesService(this.client);
        }
        return this._kubernetes;
    }

    get autoscaling() {
        if (!this._autoscaling) {
            const AutoscalingService = require('@utho/sdk-autoscaling');
            this._autoscaling = new AutoscalingService(this.client);
        }
        return this._autoscaling;
    }

    get backups() {
        if (!this._backups) {
            const BackupService = require('@utho/sdk-backups');
            this._backups = new BackupService(this.client);
        }
        return this._backups;
    }

    get iso() {
        if (!this._iso) {
            const ISOService = require('@utho/sdk-iso');
            this._iso = new ISOService(this.client);
        }
        return this._iso;
    }

    get monitoring() {
        if (!this._monitoring) {
            const MonitoringService = require('@utho/sdk-monitoring');
            this._monitoring = new MonitoringService(this.client);
        }
        return this._monitoring;
    }

    get networking() {
        if (!this._networking) {
            const NetworkingService = require('@utho/sdk-networking');
            this._networking = new NetworkingService(this.client);
        }
        return this._networking;
    }

    get objectstorage() {
        if (!this._objectstorage) {
            const ObjectStorageService = require('@utho/sdk-objectstorage');
            this._objectstorage = new ObjectStorageService(this.client);
        }
        return this._objectstorage;
    }

    get registry() {
        if (!this._registry) {
            const RegistryService = require('@utho/sdk-registry');
            this._registry = new RegistryService(this.client);
        }
        return this._registry;
    }

    get security() {
        if (!this._security) {
            const SecurityService = require('@utho/sdk-security');
            this._security = new SecurityService(this.client);
        }
        return this._security;
    }

    get snapshots() {
        if (!this._snapshots) {
            const SnapshotsService = require('@utho/sdk-snapshots');
            this._snapshots = new SnapshotsService(this.client);
        }
        return this._snapshots;
    }

    get sqs() {
        if (!this._sqs) {
            const SQSService = require('@utho/sdk-sqs');
            this._sqs = new SQSService(this.client);
        }
        return this._sqs;
    }

    get ssl() {
        if (!this._ssl) {
            const SslService = require('@utho/sdk-ssl');
            this._ssl = new SslService(this.client);
        }
        return this._ssl;
    }

    get stacks() {
        if (!this._stacks) {
            const StacksService = require('@utho/sdk-stacks');
            this._stacks = new StacksService(this.client);
        }
        return this._stacks;
    }

    get storage() {
        if (!this._storage) {
            const StorageService = require('@utho/sdk-storage');
            this._storage = new StorageService(this.client);
        }
        return this._storage;
    }

    get transfer() {
        if (!this._transfer) {
            const TransferService = require('@utho/sdk-transfer');
            this._transfer = new TransferService(this.client);
        }
        return this._transfer;
    }

    get vpn() {
        if (!this._vpn) {
            const VpnService = require('@utho/sdk-vpn');
            this._vpn = new VpnService(this.client);
        }
        return this._vpn;
    }

    get waf() {
        if (!this._waf) {
            const WafService = require('@utho/sdk-waf');
            this._waf = new WafService(this.client);
        }
        return this._waf;
    }

    get actions() {
        if (!this._actions) {
            const ActionsService = require('@utho/sdk-actions');
            this._actions = new ActionsService(this.client);
        }
        return this._actions;
    }

    get activity() {
        if (!this._activity) {
            const ActivityService = require('@utho/sdk-activity');
            this._activity = new ActivityService(this.client);
        }
        return this._activity;
    }

    get subuser() {
        if (!this._subuser) {
            const SubUserService = require('@utho/sdk-subuser');
            this._subuser = new SubUserService(this.client);
        }
        return this._subuser;
    }

    get targetgroup() {
        if (!this._targetgroup) {
            const TargetGroupService = require('@utho/sdk-targetgroup');
            this._targetgroup = new TargetGroupService(this.client);
        }
        return this._targetgroup;
    }

    get ipsec() {
        if (!this._ipsec) {
            const IpSecService = require('@utho/sdk-ipsec');
            this._ipsec = new IpSecService(this.client);
        }
        return this._ipsec;
    }
}

module.exports = Utho;
