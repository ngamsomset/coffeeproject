require('dotenv').config({ path: '../.env' });
const { db } = require('@vercel/postgres');

async function createTable(client) {
  try {
    // Create the testinguser table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS testinguser (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      );
    `);
    console.log('Table testinguser created successfully');
  } catch (error) {
    console.error('Error creating table testinguser:', error);
    throw error;
  }
}
async function alterTable(client) {
    try {
      // Add the fullname column if it doesn't exist
      await client.query(`
        ALTER TABLE IF EXISTS testinguser
        ADD COLUMN IF NOT EXISTS nationality VARCHAR(255) NOT NULL DEFAULT '',
        ADD COLUMN IF NOT EXISTS gender VARCHAR(255) NOT NULL DEFAULT '',
        ADD COLUMN IF NOT EXISTS birthdate VARCHAR(255) NOT NULL DEFAULT '';
      `);
      console.log('Table testinguser altered successfully');
    } catch (error) {
      console.error('Error altering table testinguser:', error);
      throw error;
    }
  }

async function main() {
  const client = await db.connect();
  await alterTable(client);
  await client.end();
}

main()
  .then(() => {
    console.log('Database schema seeded successfully');
  })
  .catch(error => {
    console.error('Error seeding database schema:', error);
  });
