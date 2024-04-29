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
    const cafes = await sql`SELECT * FROM cafesDetailed WHERE cafesDetailed.cafename ILIKE ${`%${query}%`} LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;
    return cafes.rows;
  } catch (error) {
    console.error('Failed to fetch cafes: ', error);
    throw new Error('Failed to fetch cafes.');
  }
}

export async function fetchCafePages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*) FROM cafesDetailed WHERE cafesDetailed.cafename ILIKE ${`%${query}%`}`;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of cafes.');
  }
}

export async function getCafe(cafeId: number) {
  noStore();
  try {
    const cafes = await sql`SELECT * FROM cafesDetailed WHERE cafesDetailed.cafeid = ${cafeId}`;
    return cafes.rows[0];
  } catch (error) {
    console.error('Failed to fetch cafe: ', error);
    throw new Error('Failed to fetch cafe.');
  }
}

export async function getLatestReviews() {
  noStore();
  try {
    const reviews = await sql`SELECT cd.cafeName, cd.formattedAddress, cr.starRating, cr.coffeeType, cr.comments FROM cafeReviews cr JOIN cafesDetailed cd ON cr.cafeId = cd.cafeId ORDER BY cr.reviewId DESC LIMIT 3;`;
    return reviews.rows;
  } catch (error) {
    console.error('Failed to fetch reviews: ', error);
    throw new Error('Failed to fetch reviews.');
  }
}

export async function getLatestCafeReviews(cafeId: number) {
  noStore();
  try {
    const reviews = await sql`SELECT 
                              tu.email,
                              cr.starRating, 
                              cr.coffeeType, 
                              cr.atmosphere, 
                              cr.price, 
                              cr.customerService, 
                              cr.comments,
                              cd.cafeName
                            FROM 
                              cafeReviews cr 
                            JOIN cafesDetailed cd ON cr.cafeId = cd.cafeId 
                            JOIN testinguser tu ON cr.userId = tu.id
                            WHERE cr.cafeId = ${cafeId} 
                            ORDER BY cr.reviewId DESC LIMIT 3;`;
    return reviews.rows;
  } catch (error) {
    console.error('Failed to fetch reviews: ', error);
    throw new Error('Failed to fetch reviews.');
  }
}

export async function getUserReviews(userId: any) {
  noStore();
  try {
    const reviews = await sql`SELECT 
                              tu.email,
                              cr.starRating, 
                              cr.coffeeType, 
                              cr.atmosphere, 
                              cr.price, 
                              cr.customerService, 
                              cr.comments,
                              cd.cafename
                            FROM 
                              cafeReviews cr 
                            JOIN cafesDetailed cd ON cr.cafeId = cd.cafeId 
                            JOIN testinguser tu ON cr.userId = tu.id
                            WHERE tu.id = ${userId} 
                            ORDER BY cr.reviewId DESC;`;
    return reviews.rows;
  } catch (error) {
    console.error('Failed to fetch reviews: ', error);
    throw new Error('Failed to fetch reviews.');
  }
}

export async function getCafeRating(cafeId: any) {
  noStore();
  try {
    const cafes = await sql`SELECT
                            AVG(CAST(starRating AS DECIMAL)) AS averageStarRating
                            FROM cafeReviews
                            WHERE cafeid = ${cafeId}`;
    return cafes.rows[0];
  } catch (error) {
    console.error('Failed to fetch cafe rating: ', error);
    throw new Error('Failed to fetch cafe rating.');
  }
}

export async function getCafesFromRecommendation(cafeIds: any) {
  noStore();
  try {
    const query = 'SELECT * FROM cafesDetailed WHERE cafeid IN ($1, $2, $3)'
    const params = cafeIds
    const cafes = await sql.query(query, params)
    return cafes.rows;
  } catch (error) {
    console.error('Failed to fetch cafes: ', error);
    throw new Error('Failed to fetch cafes.');
  }
}

export async function getUserDetails(userId: any) {
  noStore();
  try{
    const userDetails = await sql`SELECT 
                                    fullname, 
                                    birthdate, 
                                    nationality, 
                                    gender 
                                  FROM testinguser 
                                  WHERE id = ${userId} 
                                  LIMIT 1;`;
    return userDetails.rows[0];
  } catch (error) {
    console.error('Failed to fetch user details: ', error);
    throw new Error('Failed to fetch user details.');
  }
}