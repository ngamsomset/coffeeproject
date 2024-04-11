import { getCafe } from "@/app/lib/data";
import Image from "next/image";
import { MdCoffee } from "react-icons/md";
import { CiCoffeeBean } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import { IoHeartCircleSharp } from "react-icons/io5";
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import { FaBellConcierge } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";

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
      <CafeDetail />
    </section>
  );
}
