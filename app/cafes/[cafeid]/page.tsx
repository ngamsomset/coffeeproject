import { getCafe } from "@/app/lib/data";
import Image from "next/image";

import React from 'react'

// Remaining data about the individual cafe and styling still needs to be added here

export default async function CafeDetails({ params }: { params: { cafeid: number } }) {
    const cafedata = await getCafe(params.cafeid)

    return (
        <section className="my-16 max-w-screen-lg mx-auto min-h-[60vh]">
            <div className="grid grid-cols-4 gap-4 px-12 lg:px-0 lg:max-w-screen-lg mx-auto">
                <div className="col-span-4 lg:col-span-2">
                    <h1 className="text-3xl mb-10 text-[#582F0E]">{cafedata.cafename}</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima tempora voluptate a, consequatur vitae neque, 
                        blanditiis dolorum quibusdam beatae accusantium velit nobis cum corrupti dolore voluptatum dicta odit 
                        aspernatur nostrum.
                    </p>
                </div>
                <div className="col-span-4 lg:col-span-2">
                    {/* This hardcoded value needs to be changed in the future */}
                    <Image src={"/images/cafe_street.jpg"} alt="Image of cafe" width={500} height={500} className="rounded" />
                </div>
            </div>
        </section>
    )
}