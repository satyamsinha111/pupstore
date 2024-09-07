const fs = require('fs');
const { faker } = require('@faker-js/faker');
const stream = fs.createWriteStream('users.json', { flags: 'a' });

const numberOfRecords = 100;
const batchSize = 10000;  // Write 10,000 records at a time

stream.write('[');  // Start of the JSON array

for (let i = 0; i < numberOfRecords; i += batchSize) {
    const users = [];

    for (let j = 0; j < batchSize && i + j < numberOfRecords; j++) {
        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            isAdmin: faker.datatype.boolean(),
            address: {
                street: faker.location.streetAddress(),
                city: faker.location.city(),
                state: faker.location.state(),
                zipCode: faker.location.zipCode()
            },
            phone: faker.phone.number(),
            createdAt: faker.date.past().toISOString()
        };
        users.push(user);
    }
    console.log('JSON.stringify(users).slice(1, -1)',JSON.stringify(users).slice(1, -1));
    stream.write(JSON.stringify(users).slice(1, -1)); // Slice to remove array brackets

    if (i + batchSize < numberOfRecords) {
        stream.write(',');  // Add a comma between batches
    }
}

stream.write(']');  // End of the JSON array
stream.end(() => {
    console.log(`Successfully generated ${numberOfRecords} records.`);
});
