import { getCafe } from "@/app/lib/data";

import React from "react";
import CafeDetail from "@/app/components/CafeDetail";

// Remaining data about the individual cafe and styling still needs to be added here
export default async function CafeDetails({
  params,
}: {
  params: { cafeid: number };
}) {
  const cafedata = await getCafe(params.cafeid);

  return (
    <section className="my-16  mx-auto lg:max-w-screen-xl min-h-[60vh]  ">
      <CafeDetail cafeData={cafedata} />
    </section>
  );
}
