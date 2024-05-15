import React from 'react'
import { getAllCafes } from '../lib/data';
import CafeCard from './CafeCard';

export default async function CafeList({
    query,
    currentPage,
    goodForChildren
}: {
    query: string;
    currentPage: number;
    goodForChildren:boolean;
}) {
    const cafes = await getAllCafes(query, goodForChildren, currentPage);

    return (
        <div className="md:grid grid-cols-3 gap-5 justify-between">
            {cafes.map((cafe, index) => (
                <CafeCard
                    name={cafe.cafename}
                    location={cafe.formattedaddress}
                    slug={`/cafes/${cafe.cafeid}`}
                    imagePath='/images/cafe_street.jpg' //cafe.imagePath
                    key={index}
                />
            ))}
        </div>
    )
}