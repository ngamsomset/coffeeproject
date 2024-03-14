import { sql } from '@vercel/postgres';
import { User } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function getAllUser() {
  try {
    const user = await sql`SELECT * FROM coffeeusers`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user: ', error);
    throw new Error('Failed to fatch user.');
  }
}

const ITEMS_PER_PAGE = 9;
export async function getAllCafes(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const cafes = await sql`SELECT * FROM cafes WHERE cafes.cafename ILIKE ${`%${query}%`} LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;
    return cafes.rows;
  } catch (error) {
    console.error('Failed to fetch cafes: ', error);
    throw new Error('Failed to fetch cafes.');
  }

}

export async function fetchCafePages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*) FROM cafes WHERE cafes.cafename ILIKE ${`%${query}%`}`;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of cafes.');
  }
}