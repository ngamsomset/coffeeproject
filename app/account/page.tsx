import React from 'react'
import PreferenceTile from '../components/PreferenceTile'
import PersonalDetails from '../components/PersonalDetails'
import CafeReviewCard from '../components/CafeReviewCard'
import { getServerSession } from 'next-auth';
import { authOptions } from '../lib/auth';
import { getUserReviews } from '../lib/data';

const page = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const userReviews = await getUserReviews(userId);

  var itemCount = 0;

  // Check reviewCount so we can send it to the total box.
  if (Array.isArray(userReviews)) {
    itemCount = userReviews.length;
  }

  return (
    <section className="my-16 max-w-screen-lg mx-auto min-h-[60vh] px-8">
      <div className='grid'>
        <div className='grid grid-cols-3 gap-12 md:gap-4'>
          <div className='col-span-3 md:col-span-2'>
            <PersonalDetails />
          </div>
          <div className='col-span-3 md:col-span-1'>
            <PreferenceTile itemCount={itemCount}/>
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <div>
          <h2 className='text-2xl mb-6'>Your latest café visits</h2>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {userReviews.length === 0 ? (
            <p className="italic">No reviews yet</p>
          ) : (
            userReviews.map((review, index) => (
              <div className='col-span-2 md:col-span-1' key={index}>
                <CafeReviewCard reviewData={review} showCafeName={true} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default page
