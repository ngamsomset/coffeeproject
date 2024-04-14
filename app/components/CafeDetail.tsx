import React from "react";
import Image from "next/image";
import { CiCoffeeBean } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import ReviewForm from "./ReviewForm";
import CafeReviewCard from "./CafeReviewCard";

interface CafeDetailProps {
  cafeData: any;
}

const CafeDetail: React.FC<CafeDetailProps> = ({ cafeData }) => {
  return (
    <div className="grid grid-cols-4 gap-4 px-12 lg:px-0 lg:max-w-screen-xl w-full mx-auto">
      <div className="col-span-4 lg:col-span-2 ml-4">
        <div className="flex flex-wrap">
          <h1 className="text-[36px] pt-5 text-[#582F0E] self-start">
            {cafeData.cafename}
          </h1>
          <span className="self-center flex text-xl text-[#36402D] my-4">
            <p className="pr-3 mt-2">Rating</p>
            <TiStarFullOutline
              size={45}
              className="fill-[#C2ECCD] border-1 border-black"
            />
            <TiStarFullOutline
              size={45}
              className="fill-[#C2ECCD] border-1 border-black"
            />
          </span>
        </div>

        <div className="flex align-middle">
          <p className="text-2xl text-[#582F0E] my-4">Cafe Details</p>
        </div>
        <div className="flex-col space-y-4 text-[#36402D] text-[16px]">
          <div className="flex flex-wrap space-x-2">
            <p className="font-semibold">Location:</p><p>{cafeData.formattedaddress}</p>
          </div>
          <div className="flex flex-wrap space-x-2">
            <p className="font-semibold">Opening hours:</p><p>7.00 am - 3.30 pm</p>
          </div>
          <div className="flex flex-wrap space-x-2">
            <p className="font-semibold">Telephone:</p><p>02 9211 0665</p>
          </div>
          <div className="flex flex-wrap space-x-2">
            <p className="font-semibold">Website:</p><p>singleo.com.au</p>
          </div>
        </div>
        <div className="flex align-middle">
          <p className="text-2xl text-[#582F0E] py-8 ">Latest Reviews</p>
        </div>
        {/* Need to add logic here once the reviews are imported */}
        <CafeReviewCard/>
      </div>
      <div className="col-span-4 lg:col-span-2 mt-[60px] ">
        {/* This hardcoded value needs to be changed in the future */}
        <Image
          src={"/images/cafe_street.jpg"}
          alt="Image of cafe"
          width={450}
          height={414}
          className="rounded-lg w-[450px] h-[414px] ml-36"
        />
        <div className="ml-40">
          <div className="my-4 text-[#582F0E] text-2xl font-[Antique Olive]">
            <div className="flex">
              <CiCoffeeBean size={35} />
              <p className="ml-2 mt-1">Single-origin Ethiopia</p>
            </div>
          </div>
          <div className="text-[#36402D] text-xl space-y-2">
            <div className="flex gap-x-2">
              <p>Process:</p>
              <p>Washed</p>
            </div>
            <div className="flex gap-x-2">
              <p>Suitable for:</p>
              <p>Filter</p>
            </div>
            <div className="flex gap-x-2">
              <p>Taste:</p>
              <p>Cherry &amp; Lime</p>
            </div>
          </div>
        </div>
      </div>
      <ReviewForm/>
    </div>
  );
};

export default CafeDetail;
