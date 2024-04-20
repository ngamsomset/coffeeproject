import React from 'react'

const PersonalDetails = () => {
    return (
        <div className='flex gap-10 items-center'>
  <div>
    <img src='/images/userAvatar.jpeg' className='rounded-full border' alt='User Avatar'></img>
  </div>
  <div className='flex flex-wrap h-fit gap-3'>
    <h2 className="text-3xl text-[#582F0E] w-full">Hi, User!</h2>
    <h3 className="text-2xl text-[#582F0E] w-full">Your details</h3>
    <div className='text-lg'>
      <p>Date of Birth: 123456789</p>
      <p>Gender: Male</p>
      <p>Nationality: Australian</p>
    </div>
  </div>
</div>

    )
}

export default PersonalDetails
