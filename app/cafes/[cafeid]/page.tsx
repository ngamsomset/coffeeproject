import { getCafe } from "@/app/lib/data";

import React from "react";
import CafeDetail from "@/app/components/CafeDetail";
import { getServerSession } from 'next-auth/next';
import { authOptions } from "@/app/lib/auth";

// Remaining data about the individual cafe and styling still needs to be added here
export default async function CafeDetails({
  params,
}: {
  params: { cafeid: number, userid: any };
}) {
  const cafedata = await getCafe(params.cafeid);

  // Gets the id of the currently signed in user from the session
  const session = await getServerSession(authOptions);
  const user = session?.user.id;

  return (
    <section className="my-16  mx-auto lg:max-w-screen-xl min-h-[60vh]  ">
      <CafeDetail cafeData={cafedata} userId={user} />
    </section>
  );
}
