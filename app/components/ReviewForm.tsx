"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

const ReviewForm = ({ cafeId, userId }: { cafeId: any; userId: any; }) => {
    const [formData, setFormData] = useState({
        starRating: '',
        coffeeType: '',
        customerService: '',
        price: '',
        atmosphere: '',
        comments: '',
    });

    const [submitted, setSubmitted] = useState(false); // State to track form submission
    const [loading, setLoading] = useState(false); // State to track loading

    const isFormValid = () => {
        return (
            formData.starRating &&
            formData.coffeeType &&
            formData.customerService &&
            formData.price &&
            formData.atmosphere &&
            formData.comments
        );
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if all required fields are filled out
        if (!isFormValid()) {
            console.error('Please fill out all required fields');
            return;
        }

        setLoading(true); // Set loading state to true

        try {
            const response = await fetch('.././api/review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ reviewData: formData, cafeId, userId }),
            });

            if (response.ok) {
                console.log('Review submitted successfully');
                setSubmitted(true);
            } else {
                console.error('Failed to submit review');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
        } finally {
            setLoading(false); // Set loading state to false after submission attempt
        }
    };

    // Handle form field changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (submitted) {
        return (
            <div className="col-span-4 mx-auto">
                <div className="text-2xl text-[#582F0E] m-8 ">Thanks for sharing your opinion!</div>
            </div>
        );
    } else {

        return (
            <div className="col-span-4">
                <div className="text-2xl text-[#582F0E] mb-8">Leave a review</div>
                <div className="bg-[#582F0E] w-full h-[1000x] rounded-xl text-[#EDE0D4] p-10">
                    <form onSubmit={handleSubmit}>
                        <div className="mx-2 md:mx-4">
                            <label className="text-xl" htmlFor="starRating">
                                1. How would you rate the overall experience?
                            </label>
                            <div className="mt-5 lg:ml-8 mb-8 flex gap-x-12 flex-wrap">
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="starRating"
                                        value="1"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">1 - Poor</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="starRating"
                                        value="2"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">2 - Fair</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="starRating"
                                        value="3"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">3 - Good</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="starRating"
                                        value="4"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">4 - Very good</span>
                                </label>

                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="starRating"
                                        value="5"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">5 - Excellent</span>
                                </label>
                            </div>

                            <label className=" text-xl" htmlFor="coffeeType">
                                2. What did you order?
                            </label>
                            <div className="mt-5 lg:ml-8 mb-8 flex gap-x-12 flex-wrap">
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="coffeeType"
                                        value="Latte"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Latte</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="coffeeType"
                                        value="Flat white"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Flat white</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="coffeeType"
                                        value="Long black"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Long black</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="coffeeType"
                                        value="Cappucino"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Cappucino</span>
                                </label>

                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="coffeeType"
                                        value="Other"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Other</span>
                                </label>
                            </div>


                            <label className="text-xl mt-6" htmlFor="customerService">
                                3. How was the customer service?
                            </label>
                            <div className="mt-5 lg:ml-8 mb-8 flex gap-x-12 flex-wrap">
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="customerService"
                                        value="Very good"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Very good</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="customerService"
                                        value="Good"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Good</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="customerService"
                                        value="Bad"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Bad</span>
                                </label>
                            </div>
                            <label className="text-xl mt-6" htmlFor="price">
                                4. What do you think about the price?
                            </label>
                            <div className="mt-5 lg:ml-8 mb-8 flex gap-x-12 flex-wrap">
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="price"
                                        value="Very cheap"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Very cheap</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="price"
                                        value="Cheap"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Cheap</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="price"
                                        value="Average"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Average</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="price"
                                        value="Expensive"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Expensive</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="price"
                                        value="Very expensive"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Very expensive</span>
                                </label>
                            </div>
                            <label className="text-xl mt-6" htmlFor="atmosphere">
                                5. How would you describe the atmosphere?
                            </label>
                            <div className="mt-5 lg:ml-8 mb-8 flex gap-x-12 flex-wrap">
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="atmosphere"
                                        value="Cozy"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Cozy</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="atmosphere"
                                        value="Vibrant"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Vibrant</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="atmosphere"
                                        value="Zen"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Zen</span>
                                </label>
                                <label className="items-center w-full sm:w-fit">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="atmosphere"
                                        value="Eclectic"
                                        onChange={handleChange}
                                    ></input>
                                    <span className="ml-2">Eclectic</span>
                                </label>
                            </div>

                            <label className="text-xl mt-6" htmlFor="comments">
                                7. Any additional comments?
                            </label>
                            <div className="mt-5 lg:ml-8 mb-8 flex gap-x-12 flex-wrap text-black">
                                <textarea
                                    id="comments"
                                    name="comments"
                                    rows={4}
                                    onChange={handleChange}
                                    className="block w-[1039px] bg-white rounded-md  p-2 text-[#36402D] shadow-sm ring-1 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                ></textarea>
                            </div>
                            <input type="hidden" name="cafeId" value={cafeId} />
                            <input type="hidden" name="userId" value={userId} />
                        </div>
                        <button
                            className="px-1 py-1 w-fit rounded-xl bg-[#36402D] text-white hover:scale-105 duration-500"
                            type="submit"
                            disabled={loading} // Disable the button while loading
                        >
                            {loading ? <span className="block bg-[#36402D] rounded-full px-5 py-2 disabled">Submitting...</span> : <span className='block bg-[#36402D] rounded-full px-5 py-2'>Submit</span>}
                        </button>
                    </form>
                </div>
            </div>
        );
    }
};

export default ReviewForm;
