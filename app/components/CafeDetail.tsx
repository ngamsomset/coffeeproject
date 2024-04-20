import React from "react";
import Image from "next/image";
import { CiCoffeeBean } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import { FaMapPin, FaUserGroup, FaChildReaching } from "react-icons/fa6";
import { BiCoffeeTogo } from "react-icons/bi";
import ReviewForm from "./ReviewForm";
import CafeReviewCard from "./CafeReviewCard";
import { getLatestCafeReviews } from "../lib/data";

interface CafeDetailProps {
  cafeData: any;
  userId: any;
}

const CafeDetail: React.FC<CafeDetailProps> = async ({ cafeData, userId }) => {
  const latestReviews = await getLatestCafeReviews(cafeData.cafeid);

  return (
    <section className="my-16 px-12 lg:px-0 lg:max-w-screen-lg mx-auto">
      <h1 className="text-[36px] pt-5 text-[#582F0E] self-start">{cafeData.cafename}</h1>
      <div className="grid grid-cols-4 gap-8 lg:gap-24 lg:max-w-screen-xl w-full mx-auto mt-5">
        <div className="col-span-4 lg:col-span-2">
          <div className="flex flex-wrap">
            <span className="self-center flex text-xl text-[#36402D] w-full mb-2">
              <p className="mt-2">Rating</p>
              {/* TODO: Rating here will be calculated from the database */}
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
            <div className="flex flex-wrap space-x-2 items-center">
              <FaMapPin className="inline-block mr-1" />
              <p className="font-semibold">{cafeData.formattedaddress}</p>
            </div>
            <div className="flex flex-wrap space-x-2 items-center">
              {cafeData.goodforgroups && (
                <>
                  <FaUserGroup className="inline-block mr-1" />
                  <p className="font-semibold">Good for groups</p>
                </>
              )}
            </div>
            <div className="flex flex-wrap space-x-2 items-center">
              {cafeData.goodforchildren && (
                <>
                  <FaChildReaching className="inline-block mr-1" />
                  <p className="font-semibold">Good for children</p>
                </>
              )}
            </div>
            <div className="flex flex-wrap space-x-2 items-center">
              {cafeData.takeout && (
                <>
                  <BiCoffeeTogo className="inline-block mr-1" />
                  <p className="font-semibold">Offers takeout</p>
                </>
              )}
            </div>
          </div>
          <div className="flex align-middle">
            <p className="text-2xl text-[#582F0E] py-8 ">Latest Reviews</p>
          </div>
          {latestReviews.length === 0 ? (
            <p className="italic">No reviews yet</p>
          ) : (
            latestReviews.map((review, index) => (
              <CafeReviewCard key={index} reviewData={review} />
            ))
          )}
        </div>
        <div className="col-span-4 lg:col-span-2 order-first lg:order-none">
          {/* This hardcoded value needs to be changed in the future */}
          <Image
            src={"/images/cafe_street.jpg"}
            alt="Image of cafe"
            width={500}
            height={414}
            className="rounded-lg lg:ml-auto lg:mb-auto"
          />
          <div className="lg:ml-auto ">
            <div className="flex text-[#582F0E] pt-4 pb-2">
              <p className="text-2xl ">Bean of the week</p><CiCoffeeBean size={30} className="ml-2" />
            </div>
            <div className="text-[#36402D] text-[16px] space-y-1 font-semibold ml-4">
              <div className="flex gap-x-2">
                <p>Single-origin Ethiopia</p>
              </div>
              <div className="flex gap-x-2">
                <p>Process: Washed</p>
              </div>
              <div className="flex gap-x-2">
                <p>Suitable for: Filter</p>
              </div>
              <div className="flex gap-x-2">
                <p>Taste: Cherry &amp; Lime</p>
              </div>
            </div>
          </div>
        </div>
        <ReviewForm cafeId={cafeData.cafeid} userId={userId} />
      </div>
    </section>
  );
};

export default CafeDetail;
