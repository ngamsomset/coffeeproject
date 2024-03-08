"use client"
import React from 'react'
import { PiCoffeeFill } from "react-icons/pi";
import { FaMapMarkedAlt, FaCommentDots, FaStar } from "react-icons/fa";

const ReviewCard = ({ cafeName, location, slug, imagePath, starRating, comment, beverage }: { cafeName: any, location: any, slug: any, imagePath: any, starRating: number, comment: any, beverage: any }) => {
  let td = [];

  for (let i = 1; i <= starRating; i++) {
    td.push(<FaStar size={20} key={i} />);
  }

  return (
    <div className="card md:card-side bg-[#E6CCB2] shadow-xl w-[80vw] md:w-auto mx-auto">
      <figure className='md:w-[30%]'><img src={imagePath} alt="Picture of a cafe" /></figure>
      <div className="card-body">
        <div className='flex'>
          <h2 className="card-title">{cafeName}</h2>
          <div className='ml-2 flex'>
            {td}
          </div>
        </div>
        <div className='flex align-middle'>
          <FaMapMarkedAlt size={20} /><p className='ml-3'>{location}</p>
        </div>
        <div className='flex align-middle'>
          <PiCoffeeFill size={20} /><p className='ml-3'>{beverage}</p>
        </div>
        <div className='flex align-middle'>
          <FaCommentDots size={20} /><p className='ml-3'>{comment}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard