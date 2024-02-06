import { sql } from '@vercel/postgres';
import { User } from './definitions';

export async function getAllUser() {
  try {
    const user = await sql`SELECT * FROM users`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user: ', error);
    throw new Error('Failed to fatch user.');
  }
}
