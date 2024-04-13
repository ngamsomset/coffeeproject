require('dotenv').config({ path: '../.env' });
const { db } = require('@vercel/postgres');
const fs = require('fs');
const csv = require('csv-parser');

async function seedCafes(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        const csvCafes = await client.sql`
            CREATE TABLE IF NOT EXISTS csvCafes (
                cafeid VARCHAR(255) PRIMARY KEY,
                cafename VARCHAR(255)
            )
        `;
        console.log('csvCafes table created');

        // Read the CSV file and insert data into the csvCafes table
        const stream = fs.createReadStream('cafes.csv').pipe(csv());

        // Array to store all the rows to be inserted
        const rows = [];

        // Set to store unique cafeids to check for duplicates
        const existingCafeIds = new Set();

        // Iterate over each row in the CSV file
        for await (const row of stream) {
            console.log('Processing row:', row);

            const trimmedId = row[' id']?.trim(); // Simplified trimming
            const trimmedDisplayName = row[' displayName']?.trim(); // Simplified trimming

            if (trimmedId && trimmedDisplayName && !existingCafeIds.has(trimmedId)) {
                existingCafeIds.add(trimmedId); // Add cafeid to set

                rows.push([trimmedId, trimmedDisplayName]);
            } else {
                console.log('Skipping row with empty or missing id or displayName or duplicate id:', row);
            }
        }

        if (rows.length > 0) {
            const query = `
                INSERT INTO csvCafes (cafeid, cafename)
                VALUES ${rows.map((_, index) => `($${index * 2 + 1}, $${index * 2 + 2})`).join(',')}
            `;
            
            await client.query(query, rows.flat()); // Execute bulk insert
            console.log('Data inserted into csvCafes table');
        }

        // Close the client connection after all queries are completed
        await client.end();
        console.log('Client connection closed');
    } catch (error) {
        console.error('Error seeding cafes:', error);
        // Close the client connection in case of error
        await client.end();
    }
}

async function main() {
    const client = await db.connect();
    try {
        await seedCafes(client);
    } finally {
        await client.end();
    }
}

main().catch((err) => {
    console.error('An error occurred while trying to seed data to database', err);
});
