import React from 'react'
import PreferenceTile from '../components/PreferenceTile'
import PersonalDetails from '../components/PersonalDetails'
import CafeReviewCard from '../components/CafeReviewCard'

// Placeholder data. Will retrieve user data once I populate this section with real data
const userReviews =
{
  comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor volutpat ullamcorper.',
  starrating: 4,
  coffeetype: 'Latte',
  atmosphere: "Laid back",
  customerservice: "Good",
  price: "Average",
  email: "user@email.com"
}
  ;

const page = () => {
  return (
    <section className="my-16 max-w-screen-lg mx-auto min-h-[60vh] px-8">
      <div className='grid'>
        <div className='grid grid-cols-3 gap-12 md:gap-4'>
          <div className='col-span-3 md:col-span-2'>
            <PersonalDetails />
          </div>
          <div className='col-span-3 md:col-span-1'>
            <PreferenceTile />
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <div>
          <h2 className='text-2xl mb-6'>Your latest café visits</h2>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='col-span-1'>
            <CafeReviewCard reviewData={userReviews} />
          </div>
          <div className='col-span-1'>
            <CafeReviewCard reviewData={userReviews} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
