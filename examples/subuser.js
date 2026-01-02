const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function subuserExample() {
    try {
        console.log('Listing Sub-users...');
        const users = await utho.subuser.list();
        console.log('Sub-users:', JSON.stringify(users, null, 2));

        // Create a sub-user
        /*
        const newUser = await utho.subuser.create({
            email: 'staff@example.com',
            firstname: 'John',
            lastname: 'Doe',
            mobile: '1234567890',
            password: 'SecurePassword123'
        });
        */

        if (users.data && users.data.length > 0) {
            const userId = users.data[0].id;
            console.log(`\nGetting details for Sub-user ID: ${userId}...`);
            const userDetails = await utho.subuser.get(userId);
            console.log('User Details:', JSON.stringify(userDetails, null, 2));

            /*
            console.log(`\nUpdating Sub-user ID: ${userId}...`);
            await utho.subuser.update(userId, {
                firstname: 'Johnny'
            });
            */
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
}

subuserExample();
