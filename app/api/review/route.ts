import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
const apiUrl = process.env.NEXT_ML_API_URL;

export async function POST(request: Request) {
    try {
        const { reviewData, cafeId, userId } = await request.json();

        // Add cafeId and userId to reviewData
        reviewData.cafeId = cafeId;
        reviewData.userId = userId;

        try {
            // Create the cafeReviews table 
            const createReviewsTableQuery = await sql`
                CREATE TABLE IF NOT EXISTS cafeReviews (
                reviewId SERIAL PRIMARY KEY,
                userId INT,
                cafeId VARCHAR(255),                
                starRating VARCHAR(255),
                coffeeType VARCHAR(255),
                customerService VARCHAR(255),
                price VARCHAR(255),
                atmosphere VARCHAR(255),
                comments TEXT,
                FOREIGN KEY (userId) REFERENCES testinguser(id),
                FOREIGN KEY (cafeId) REFERENCES cafesDetailed(cafeid)
                );
            `;

            // Insert reviewData into the cafeReviews table
            const insertQuery = sql`
                INSERT INTO cafeReviews (userId, cafeId, starRating, coffeeType, customerService, price, atmosphere, comments)
                VALUES (${userId}, ${cafeId}, ${reviewData.starRating}, ${reviewData.coffeeType}, ${reviewData.customerService}, ${reviewData.price}, ${reviewData.atmosphere}, ${reviewData.comments})
            `;

            if (apiUrl) {
                const categoryId = reviewData.categoryId; // This currently doesn't hold a value. Need to clarify with Anton what he expects to receive.
                const rank = reviewData.starRating; 

                const requestData = {
                    rankings: [
                        {
                            categoryId: categoryId,
                            rank: rank
                        }
                    ]
                };

                console.log(requestData);

                const apiResponse = await fetch(`${apiUrl}/users/${userId}/rankings/${cafeId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                });


                if (!apiResponse.ok) {
                    throw new Error('Failed to subit review to API');
                }
                console.log("Review submmitted to external API");
            }
            else {
                console.log("Missing API URL");
            }

            return NextResponse.json({ success: true });
        } catch (error) {
            console.error('Error saving review to database:', error);
            return NextResponse.json({ success: false, error: 'Server Error' });
        }
    } catch (error) {
        console.error('Error saving review to database:', error);
        return NextResponse.json({ success: false, error: 'Server Error' });
    }
}
