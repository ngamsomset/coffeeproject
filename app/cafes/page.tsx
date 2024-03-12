import React from 'react';
import { getAllCafes } from '../lib/data';
import CafeCard from '../components/CafeCard';

export default async function Page() {
  const cafes = await getAllCafes();

  return (
    <section className="my-16 max-w-screen-lg mx-auto min-h-[60vh]">
      <h1 className="text-3xl text-center mb-10 text-[#582F0E]">List of Cafés</h1>
      <div className="md:grid grid-cols-3 gap-5 justify-between">
        {cafes.map((cafe, index) => (
          // The hardcoded values doesn't have any equivalent fields in the seeded DB. This needs to be updated. 
          // Also need to look into pagination so we don't get all the cafe's listed at once
          <CafeCard
            name={cafe.cafename}
            location='North Wollongong, NSW' //{cafe.location}
            slug="#" //{cafe.slug}
            imagePath='/images/cafe_street.jpg' //cafe.imagePath
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
