const { db } = require('@vercel/postgres');
const { users } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS coffeeUsers(
          userID VARCHAR(255) PRIMARY KEY,
          age INT,
          gender INT,
          postIndex VARCHAR(4)
          );
        `;
        console.log('created "coffeeUsers" table');

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS answers(
          userID VARCHAR(255),
          questionID VARCHAR(255),
          answer INT,
          answerDate VARCHAR(50),
          PRIMARY KEY (userID, questionID, answerDate)
          );
        `;
        console.log('created "answers" table');

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS cafeMarks (
          userID VARCHAR(255),
          cafeID VARCHAR(255),
          categoryID VARCHAR(255),
          markValue INT,
          markDate VARCHAR(55),
          PRIMARY KEY (userID, cafeID, categoryID, markDate)
          );
        `;
        console.log('created "cafeMarks" table');

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS cafeFeatures (
          cafeID VARCHAR(255),
          cafeFeatureID INT,
          featureStatus INT,
          entryDate VARCHAR(50),
          PRIMARY KEY (cafeID, cafeFeatureID, entryDate)
          );
        `;
        console.log('created "cafeFeatures" table');

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS questions (
          questionID VARCHAR(255) PRIMARY KEY,
          question VARCHAR(255)
          );
        `;
        console.log('created "questions" table');

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS cafes (
          cafeID  VARCHAR(255) PRIMARY KEY,
          cafeName VARCHAR(255)
          );
        `;
        console.log('created "cafes" table');

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS markCategories (
          categoryID VARCHAR(255) PRIMARY KEY,
          categryName VARCHAR(255)
          );
        `;
        console.log('created "markCategories" table');

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS cafeFeatureList (
          cafeFeatureID VARCHAR(255) PRIMARY KEY,
          featureName VARCHAR(255) NOT NULL
          );
        `;
        console.log('created "markCategories" table');




        
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
             VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword});
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

async function main() {
  const client = await db.connect();
  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error('An error occued while trying to seed data to database', err);
});
