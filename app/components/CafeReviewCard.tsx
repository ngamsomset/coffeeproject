import React from 'react'
import { MdCoffee } from "react-icons/md";
import { IoHeartCircleSharp } from "react-icons/io5";
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import { FaBellConcierge } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";

const CafeReviewCard = () => {
    return (
        <div className="flex review-body mb-5">
            <div>photo</div>
            <IoHeartCircleSharp size={30} />
            <span className=" card md:card-side bg-[#36402D] shadow-xl w-[570px] h-fit ml-8 mx-auto px-6 py-4 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-12 gap-y-1 lg:gap-y-3">
                    <div className="flex">
                        <MdCoffee size={20} />
                        <p className="ml-3">Latte</p>
                    </div>
                    <div className="flex ">
                        <MdOutlineThumbUp size={20} />
                        <p className="ml-3">Delicious</p>
                    </div>
                    <div className="flex item-center">
                        <MdOutlineCameraAlt size={20} className="mt-1" />
                        <p className="ml-3">Good Vibe</p>
                    </div>
                    <div className="flex  item-center">
                        <FaBellConcierge size={20} />
                        <p className="ml-3">Very Good</p>
                    </div>
                    <div className="flex  item-center">
                        <FaDollarSign size={20} />
                        <p className="ml-3">Worth it!</p>
                    </div>
                </div>
            </span>
        </div>
    )
}

export default CafeReviewCard
