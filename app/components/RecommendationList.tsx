import React from 'react'
import CafeCard from './CafeCard';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
const apiUrl = process.env.NEXT_ML_API_URL;

interface CafePrediction {
    cafe: string;
    ranking: number;
}

interface CafeSuggestions {
    predictions: CafePrediction[];
}

const RecommendationList = async () => {
    let cafeSuggestions: CafeSuggestions = { predictions: [] };

    // FAKE USERID: This is only added for test reasons. Will be updated to retrieve current user once next auth is fully running.
    const currentUserId = 1;

    // REAL USERID: Gets the id of the currently signed in user from the session
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
        console.log(userId);

    //Endpoint connection to API service.
    if (apiUrl) {
        const apiRes = await fetch(
            `${apiUrl}/users/${currentUserId}/recommendations?start=0&size=2`,
            {
                method: 'GET',
                cache: 'no-store'
            }
        );
        if (apiRes.ok) {
            const data = await apiRes.json();
            // Check if data.predictions is an array before assigning it to cafeSuggestions
            if (Array.isArray(data.predictions)) {
                cafeSuggestions = data;
            } else {
                console.error("Response data.predictions is not an array:", data);
            }
        } else {
            console.error(`Failed to fetch data. Status: ${apiRes.status}`);
        }
    } else {
        // Hardcoded placeholder data
        cafeSuggestions = {
            predictions: [
                { cafe: 'Placeholder Cafe 1', ranking: 0.85 },
                { cafe: 'Placeholder Cafe 2', ranking: 0.75 },
                { cafe: 'Placeholder Cafe 3', ranking: 0.65 },
            ]
        };
    }
    return (
        <div className="md:flex gap-5">
            {cafeSuggestions.predictions.map((location, index) => (
                <CafeCard
                    name={location.cafe}
                    location="North Gong"
                    slug="#"
                    imagePath='/images/cafe_street.jpg'
                    key={index}
                />
            ))}
        </div>
    )
}

export default RecommendationList
