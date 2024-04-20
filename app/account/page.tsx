import React from 'react'
import PreferenceTile from '../components/PreferenceTile'
import PersonalDetails from '../components/PersonalDetails'


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

      <div>
        <h2 className='text-2xl'>Your latest café visits</h2>
      </div>
    </section>
  )
}

export default page
