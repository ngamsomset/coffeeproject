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
    // Drop the question8 and question9 columns if they exist
    await client.query(`
      ALTER TABLE IF EXISTS questionaire
      DROP COLUMN IF EXISTS question8,
      DROP COLUMN IF EXISTS question9;
    `);
    console.log('Columns question8 and question9 dropped successfully from table questionaire');
  } catch (error) {
    console.error('Error dropping columns:', error);
    throw error;
  }
}

  async function createQuestionaireTable(client) {
    try {
      // Create the testinguser table if it doesn't exist
      await client.query(`
        CREATE TABLE IF NOT EXISTS questionaire (
          id SERIAL PRIMARY KEY,
          question1 VARCHAR(255) NOT NULL,
          question2 VARCHAR(255) NOT NULL,
          question3 VARCHAR(255) NOT NULL,
          question4 VARCHAR(255) NOT NULL,
          question5 VARCHAR(255) NOT NULL,
          question6 VARCHAR(255) NOT NULL,
          question7 VARCHAR(255) NOT NULL,
          question8 VARCHAR(255) NOT NULL,
          question9 VARCHAR(255) NOT NULL
        );
      `);
      console.log('Table questionaire created successfully');
    } catch (error) {
      console.error('Error creating table questionaire:', error);
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
