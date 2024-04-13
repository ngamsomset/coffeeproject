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

        // Array to store all the insertion queries
        const queries = [];

        // Iterate over each row in the CSV file
        for await (const row of stream) {
            console.log('Processing row:', row);
        
            // Check if row.id exists and is not null or undefined before trimming whitespace
            const trimmedId = row[' id'] && typeof row[' id'] === 'string' ? row[' id'].trim() : null;
        
            // Check if row.displayName exists and is not null or undefined before trimming whitespace
            const trimmedDisplayName = row[' displayName'] && typeof row[' displayName'] === 'string' ? row[' displayName'].trim() : null;
        
            // Check if either trimmedId or trimmedDisplayName is null or empty after trimming whitespace
            if (!trimmedId || !trimmedDisplayName) {
                console.log('Skipping row with empty or missing id or displayName:', row);
                continue;
            }
        
            try {
                // Check if the record with the same cafeid already exists
                const existingRecord = await client.query(
                    'SELECT 1 FROM csvCafes WHERE cafeid = $1 LIMIT 1',
                    [trimmedId]
                );
        
                if (existingRecord.rowCount > 0) {
                    console.log(`Skipping insertion for row with duplicate cafeid: ${trimmedId}`);
                    continue;
                }
        
                const query = `
                    INSERT INTO csvCafes (cafeid, cafename)
                    VALUES ($1, $2)
                `;
        
                // Push the promise of executing the query to the array
                queries.push(client.query(query, [trimmedId, trimmedDisplayName]));
            } catch (error) {
                console.error('Error checking for existing record or inserting data:', error);
            }
        }
        

        // Wait for all queries to finish executing
        await Promise.all(queries);
        console.log('Data inserted into csvCafes table');

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
