const { db } = require('@vercel/postgres');
const { users } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        );
        `;

    console.log('created "user" table');

    const insertedUser = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
             INSERT INTO users (id, name, email, password)
             VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
             ON CONFLICT (id) NO NOTHING;
            `;
      }),
    );

    console.log(`Seeded ${insertedUser.length} users`);

    return {
      createTable,
      users: insertedUser,
    };
  } catch (error) {
    console.error('Error seeding user: ', error);
  }
}
