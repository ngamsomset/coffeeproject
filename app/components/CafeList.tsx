import React from 'react'
import { getAllCafes } from '../lib/data';
import CafeCard from './CafeCard';

export default async function CafeList({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const cafes = await getAllCafes(query, currentPage);

    return (
        <div className="md:grid grid-cols-3 gap-5 justify-between">
            {cafes.map((cafe, index) => (
                // The hardcoded values doesn't have any equivalent fields in the seeded DB. This needs to be updated. 
                // Also need to look into pagination so we don't get all the cafe's listed at once
                <CafeCard
                    name={cafe.cafename}
                    location='North Wollongong, NSW' //{cafe.location}
                    slug={`/cafes/${cafe.cafeid}`}
                    imagePath='/images/cafe_street.jpg' //cafe.imagePath
                    key={index}
                />
            ))}
        </div>
    )
}

// export default CafeList
