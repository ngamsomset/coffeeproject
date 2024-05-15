import React from 'react'
import { getAllCafes } from '../lib/data';
import CafeCard from './CafeCard';

export default async function CafeList({
    query,
    currentPage,
    goodForChildren,
    goodForGroups
}: {
    query: string;
    currentPage: number;
    goodForChildren:boolean;
    goodForGroups:boolean;
}) {
    const cafes = await getAllCafes(query, goodForChildren, goodForGroups, currentPage);

    return (
        <div className="md:grid grid-cols-3 gap-5 justify-between">
            {cafes.map((cafe, index) => (
                <CafeCard
                    name={cafe.cafename}
                    location={cafe.formattedaddress}
                    slug={`/cafes/${cafe.cafeid}`}
                    imagePath='/images/cafe_street.jpg' //TODO in a future version: Scrape google for real images.
                    key={index}
                />
            ))}
        </div>
    )
}