require('dotenv').config({ path: '../.env' });
const { db } = require('@vercel/postgres');

async function queryData() {
  const client = await db.connect();
  try {
    // Query all rows from the testinguser table
    const result = await client.query('SELECT * FROM testinguser');
    // Log the queried rows
    console.log('Queried data:', result.rows);
    return result.rows;
  } catch (error) {
    console.error('Error querying data:', error);
    throw error;
  } finally {
    // Close the database connection
    await client.end();
  }
}

queryData()
  .then(() => {
    console.log('Data queried successfully');
  })
  .catch(error => {
    console.error('Error querying data:', error);
  });
