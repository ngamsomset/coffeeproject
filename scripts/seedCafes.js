require('dotenv').config({ path: '../.env' });
const { db } = require('@vercel/postgres');
const fs = require('fs');
const csv = require('csv-parser');

async function seedCafes(client) {
    try {
        await client.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await client.query(`
            CREATE TABLE IF NOT EXISTS cafesDetailed (
                cafeid VARCHAR(255) PRIMARY KEY,
                cafename VARCHAR(255),
                formattedAddress TEXT,
                takeout BOOLEAN,
                goodForChildren BOOLEAN,
                goodForGroups BOOLEAN
            )
        `);
        console.log('cafesDetailed table created');

        const stream = fs.createReadStream('cafesReformat.csv').pipe(csv());

        const rows = [];
        const existingCafeIds = new Set();

        for await (const row of stream) {
            console.log('Processing row:', row);

            const trimmedId = row['id'];
            const trimmedDisplayName = row['displayName'];
            const formattedAddress = row['formattedAddress'];
            const takeout = row['takeout'] === 'True';
            const goodForChildren = row['goodForChildren'] === 'True';
            const goodForGroups = row['goodForGroups'] === 'True';
            const servesCoffee = row['servesCoffee'] === 'True';

            if (trimmedId && trimmedDisplayName && servesCoffee && !existingCafeIds.has(trimmedId)) {
                existingCafeIds.add(trimmedId);
                rows.push([trimmedId, trimmedDisplayName, formattedAddress, takeout, goodForChildren, goodForGroups]);
            } else {
                console.log('Skipping row:', row);
            }
        }

        if (rows.length > 0) {
            const placeholders = rows.map((_, index) => `($${index * 6 + 1}, $${index * 6 + 2}, $${index * 6 + 3}, $${index * 6 + 4}, $${index * 6 + 5}, $${index * 6 + 6})`).join(',');
            const query = `
                INSERT INTO cafesDetailed (cafeid, cafename, formattedAddress, takeout, goodForChildren, goodForGroups)
                VALUES ${placeholders}
            `;

            await client.query(query, rows.flat());
            console.log('Data inserted into cafesDetailed table');
        }

        await client.end();
        console.log('Client connection closed');
    } catch (error) {
        console.error('Error seeding cafes:', error);
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
