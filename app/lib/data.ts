import { sql } from '@vercel/postgres';
import { User } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function getAllUser() {
  noStore();

  try {
    const user = await sql`SELECT * FROM users`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user: ', error);
    throw new Error('Failed to fatch user.');
  }
}
