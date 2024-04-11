import React from "react";
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

const CafeDetail: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 px-12 lg:px-0 lg:max-w-screen-xl w-full mx-auto">
      <div className="col-span-4 lg:col-span-2 ml-4">
        {/* <h1 className="text-3xl mb-10 text-[#582F0E]">{cafedata.cafename}</h1>  */}
        <div className="flex">
          <div className="text-[36px] py-5 text-[#582F0E] self-start">
            CafeName
          </div>
          <span className="self-center flex text-xl pl-6  text-[#36402D]">
            <p className="pr-3 mt-4">rating</p>
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
          <p className="text-2xl text-[#582F0E] mb-2 ">Info</p>
        </div>
        <div className="flex-col pl-4 space-y-6 text-[#36402D] text-[20px]">
          <div className="flex flex-wrap space-x-5">
            <p>Location</p> <p>North Wollongong</p>
          </div>
          <div className="flex flex-wrap space-x-5">
            <p>Opening time</p> <p>7.00 am - 3.30 pm</p>
          </div>
          <div className="flex flex-wrap space-x-5">
            <p>Telephone</p> <p>02 9211 0665</p>
          </div>
          <div className="flex flex-wrap space-x-5">
            <p>Website</p> <p>singleo.com.au</p>
          </div>
        </div>
        <div className="flex align-middle">
          <p className="text-2xl text-[#582F0E] py-8 ">Review</p>
        </div>
        <div className="flex review-body mb-5">
          <div>photo</div>
          <IoHeartCircleSharp size={30} />
          <span className=" card md:card-side bg-[#36402D] shadow-xl w-[570px] h-[100px] ml-8 mx-auto px-6 py-4 text-white">
            <div className="grid grid-cols-3 gap-x-12 gap-y-3">
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

        <div className="flex review-body mb-5">
          <div>photo</div>
          <IoHeartCircleSharp size={30} />
          <span className=" card md:card-side bg-[#36402D] shadow-xl w-[570px] h-[100px] ml-8 mx-auto px-6 py-4 text-white">
            <div className="grid grid-cols-3 gap-x-12 gap-y-3">
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
              <p>Cherry & Lime</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 ml-4 ">
        <div className="text-2xl text-[#582F0E] mb-8 ">Leave a review</div>
        <div className="bg-[#582F0E] w-full h-[1000x] rounded-xl text-[#EDE0D4] p-10 ">
          <form>
            <div className="ml-9">
              <label className=" text-2xl " htmlFor="reviewQ1">
                1. What did you order?
              </label>
              <div className="mt-5 ml-12 mb-8 flex gap-x-5 ">
                <label className=" items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ1"
                    value="latte"
                  ></input>
                  <span className="ml-2">Latte</span>
                </label>
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ1"
                    value="flatwhite"
                  ></input>
                  <span className="ml-2">Flat white</span>
                </label>
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ1"
                    value="longblack"
                  ></input>
                  <span className="ml-2">Long Black</span>
                </label>
                <label className=" items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ1"
                    value="Cappucino"
                  ></input>
                  <span className="ml-2">Cappucino</span>
                </label>

                <label className="items-center ml-6 lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ1"
                    value="other"
                  ></input>
                  <span className="ml-2">Other</span>
                </label>
              </div>

              <label className=" text-2xl " htmlFor="reviewQ2">
                2. How was it?
              </label>
              <div className="mt-5 ml-12 mb-8 flex gap-x-5">
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ2"
                    value="delicious"
                  ></input>
                  <span className="ml-2">Delicious</span>
                </label>
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ2"
                    value="prettygood"
                  ></input>
                  <span className="ml-2">Pretty good</span>
                </label>
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ2"
                    value="ok"
                  ></input>
                  <span className="ml-2">Ok</span>
                </label>
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ2"
                    value="notbad"
                  ></input>
                  <span className="ml-2">Not bad</span>
                </label>

                <label className="items-center ml-6 lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ2"
                    value="tasteless"
                  ></input>
                  <span className="ml-2">Tasteless</span>
                </label>
              </div>
              <label className="text-2xl mt-6" htmlFor="reviewQ3">
                3. How was the customer service
              </label>
              <div className="mt-5 ml-12 mb-8 flex gap-x-5">
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ3"
                    value="verygood"
                  ></input>
                  <span className="ml-2">Very good</span>
                </label>
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ3"
                    value="good"
                  ></input>
                  <span className="ml-2">Good</span>
                </label>
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ3"
                    value="bad"
                  ></input>
                  <span className="ml-2">Bad</span>
                </label>
              </div>
              <label className="text-2xl mt-6" htmlFor="reviewQ4">
                4. What do you think about the price?
              </label>
              <div className="mt-5 ml-12 mb-8 text-base flex gap-x-5">
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ4"
                    value="itscheap"
                  ></input>
                  <span className="ml-2">It’s cheap</span>
                </label>
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ4"
                    value="worththeprice"
                  ></input>
                  <span className="ml-2 ">It’s worth the price</span>
                </label>
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ4"
                    value="toopricey"
                  ></input>
                  <span className="ml-2">It’s too pricey</span>
                </label>
              </div>
              <label className="text-2xl mt-6" htmlFor="reviewQ5">
                5. What do you think about the cafe atmosphere?
              </label>
              <div className="mt-5 ml-12 mb-8 flex gap-x-5">
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ5"
                    value="goodvibe"
                  ></input>
                  <span className="ml-2">Good vibe!</span>
                </label>
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ5"
                    value="itsokay"
                  ></input>
                  <span className="ml-2"> It’s okay</span>
                </label>
                <label className="items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ5"
                    value="idontlikeit"
                  ></input>
                  <span className="ml-2">I don’t like it</span>
                </label>
              </div>

              <label className="text-2xl mt-6" htmlFor="reviewQ6">
                6. Will you recommend this cafe?
              </label>
              <div className="mt-5 ml-12 mb-8 flex gap-x-5">
                <label className=" items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ6"
                    value="yes"
                  ></input>
                  <span className="ml-2">Definitely yes</span>
                </label>
                <label className=" items-center lg:w-1/6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="reviewQ6"
                    value="no"
                  ></input>
                  <span className="ml-2">Probably no</span>
                </label>
              </div>
              <label className="text-2xl mt-6" htmlFor="reviewQ7">
                7. Any comment to others?
              </label>
              <div className="mt-4 ml-10 mb-6 ">
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  className="block w-[1039px] bg-white rounded-md  py-1.5 text-gray-900 shadow-sm ring-1  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            className="bg-button w-[174px] text-2xl text-[#EDE0D4] uppercase rounded-full hover:bg-blue-700 text-white font-bold mt-8 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CafeDetail;
