const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function networkingExample() {
    try {
        console.log('Listing DNS domains...');
        const domains = await utho.networking.listDomains();
        console.log('Domains:', JSON.stringify(domains, null, 2));

        if (domains.data && domains.data.length > 0) {
            const domainName = domains.data[0].domain;
            console.log(`\nListing DNS records for ${domainName}...`);
            const domain = await utho.networking.getDomain(domainName);
            console.log('Domain Details & Records:', JSON.stringify(domain, null, 2));
        }

        console.log('\nListing firewalls...');
        const firewalls = await utho.networking.listFirewalls();
        console.log('Firewalls:', JSON.stringify(firewalls, null, 2));

        if (firewalls.data && firewalls.data.length > 0) {
            const fwId = firewalls.data[0].id;
            console.log(`\nGetting details for Firewall ${fwId}...`);
            const firewall = await utho.networking.getFirewall(fwId);
            console.log('Firewall Details & Rules:', JSON.stringify(firewall, null, 2));
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

networkingExample();
