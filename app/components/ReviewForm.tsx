import React from 'react'

const ReviewForm = () => {
    return (
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
                                <span className="ml-2"> It&#39;s okay</span>
                            </label>
                            <label className="items-center lg:w-1/6">
                                <input
                                    type="radio"
                                    className="form-radio"
                                    name="reviewQ5"
                                    value="idontlikeit"
                                ></input>
                                <span className="ml-2">I don&#39;t like it</span>
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
                    className="bg-button w-[174px] text-2xl text-[#EDE0D4] uppercase hover:bg-blue-700 font-bold mt-8 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default ReviewForm
