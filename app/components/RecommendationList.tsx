import React from 'react'
import CafeCard from './CafeCard';
import { authOptions } from '../lib/auth';
import { getServerSession } from 'next-auth/next';
import { getCafesFromRecommendation } from '../lib/data';
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

    // REAL USERID: Gets the id of the currently signed in user from the session
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    var cafes: any[] = [];

    //Endpoint connection to API service.
    if (apiUrl) {
        const apiRes = await fetch(
            `${apiUrl}/users/${userId}/recommendations?start=0&size=3`,
            {
                method: 'GET',
                cache: 'no-store'
            }
        );
        if (apiRes.ok) {
            const data = await apiRes.json();
            // Check if data.predictions is an array before assigning it to cafeSuggestions
            if (Array.isArray(data.recommendations)) {
                // Extract cafe IDs from predictions array
                const cafeIds = data.recommendations.map((recommendation: any) => recommendation.cafe);

                cafes = await getCafesFromRecommendation(cafeIds);
            } else {
                console.error("Response data.predictions is not an array:", data);
            }
        } else {
            console.error(`Failed to fetch data. Status: ${apiRes.status}`);
        }
    } else {
        // Hardcoded placeholder data if env variable isn't set
        cafes = [
            {
                cafeid: 'ChIJq6paFw3gEmsRYeJZ24otRJk',
                cafename: 'Earth Walker & Co General Store & Cafe',
                formattedaddress: '749 Lawrence Hargrave Dr Coledale NSW 2515 Australia',
                takeout: true,
                goodforchildren: true,
                goodforgroups: true
            },
            {
                cafeid: 'ChIJhcctpAjhEmsR9zp_ab0ds9M',
                cafename: 'Headlands Hotel Brasserie & Bar Austinmer',
                formattedaddress: '1b Headland Ave Austinmer NSW 2515 Australia',
                takeout: false,
                goodforchildren: true,
                goodforgroups: true
            },
            {
                cafeid: 'ChIJz2DwG6HhEmsRe0Fj7pudvdE',
                cafename: 'Saltie Dog - Coffee & Crêpes Coledale',
                formattedaddress: '748 Lawrence Hargrave Dr Coledale NSW 2515 Australia',
                takeout: true,
                goodforchildren: false,
                goodforgroups: false
            }
        ]
    }
    return (
        <div className="md:flex gap-5">
            {cafes.length > 0 ? (
                cafes.map((cafe, index) => (
                    <CafeCard
                        name={cafe.cafename}
                        location={cafe.formattedaddress}
                        slug={`/cafes/${cafe.cafeid}`}
                        imagePath='/images/cafe_street.jpg' //cafe.imagePath
                        key={index}
                    />
                ))
            ) : (
                <p className='text-center w-full italic my-8'>No cafe suggestions available.</p>
            )}
        </div>
    )
}

export default RecommendationList
