import React from 'react'
import { MdCoffee } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import { FaBellConcierge } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { FaCommentDots } from "react-icons/fa";

const CafeReviewCard = ({ reviewData, showCafeName }: { reviewData: any; showCafeName: boolean }) => {
    return (
        <div className="flex mb-5">
            <span className="card bg-[#36402D] shadow-xl w-[570px] h-fit px-6 py-4 text-white justify-start">
                {showCafeName && <h3 className='text-xl font-semibold'>Test</h3>}
                <div className="flex my-4">
                    <FaCommentDots size={20} />
                    <p className="ml-3 italic">"{reviewData.comments}"</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-3 lg:gap-y-3">
                    <div className="flex ">
                        <TiStarFullOutline size={20} />
                        <p className="ml-3">{reviewData.starrating} stars</p>
                    </div>
                    <div className="flex">
                        <MdCoffee />
                        <p className="ml-3">{reviewData.coffeetype}</p>
                    </div>
                    <div className="flex item-center">
                        <MdOutlineCameraAlt size={20} className="mt-1" />
                        <p className="ml-3">{reviewData.atmosphere}</p>
                    </div>
                    <div className="flex  item-center">
                        <FaBellConcierge size={20} />
                        <p className="ml-3">{reviewData.customerservice}</p>
                    </div>
                    <div className="flex item-center">
                        <FaDollarSign size={20} />
                        <p className="ml-3">{reviewData.price}</p>
                    </div>
                </div>

                <div className="mt-3 text-right">
                    <p className='text-xs text-white/50'>- {reviewData.email}</p>
                </div>
            </span>
        </div>
    )
}

export default CafeReviewCard
