import { sql } from '@vercel/postgres';
import { User } from './definitions';

export async function getAllUser() {
  try {
    const user = await sql`SELECT * FROM coffeeusers`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user: ', error);
    throw new Error('Failed to fatch user.');
  }
}

export async function getAllCafes() {
  try {
    const cafes = await sql`SELECT * FROM cafes`;
    return cafes.rows;
  } catch (error) {
    console.error('Failed to fetch cafes: ', error);
    throw new Error('Failed to fetch cafes.');
  }

}