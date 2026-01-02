const Utho = require('../src/index');

const apiKey = 'YOUR_API_KEY';
const utho = new Utho(apiKey);

async function stacksExample() {
    try {
        console.log('Listing Stacks...');
        const stacks = await utho.stacks.list();
        console.log('Stacks:', JSON.stringify(stacks, null, 2));

        // Create a stack
        // const createResponse = await utho.stacks.create({
        //     title: 'My Stack',
        //     description: 'Automation stack for deployment',
        //     images: 'ubuntu-20.04',
        //     status: 'active',
        //     script: '#!/bin/bash\necho "Hello World"'
        // });
        // console.log('Created:', createResponse);

        // Update a stack
        // const updateResponse = await utho.stacks.update('stack-id', {
        //     title: 'Updated Stack Title'
        // });

        // Delete a stack
        // await utho.stacks.delete('stack-id');

    } catch (error) {
        console.error('Error:', error.message);
    }
}

stacksExample();
