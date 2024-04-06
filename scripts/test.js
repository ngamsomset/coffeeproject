require('dotenv').config({ path: '../.env' });
const { db } = require('@vercel/postgres');

async function createTable(client) {
    try {
      // Create the usersignup table if it doesn't exist
      await client.query(`
        CREATE TABLE IF NOT EXISTS usersignup (
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL,
          name VARCHAR(255) NOT NULL,
          birthdate DATE NOT NULL,
          gender VARCHAR(10) NOT NULL,
          nationality VARCHAR(255) NOT NULL
        );
      `);
      console.log('Table usersignup created successfully');
    } catch (error) {
      console.error('Error creating table usersignup:', error);
      throw error;
    }
  }
async function main() {
  const client = await db.connect();
  await createTable(client);
  await client.end();
}

main()
  .then(() => {
    console.log('Database schema seeded successfully');
  })
  .catch(error => {
    console.error('Error seeding database schema:', error);
  });
