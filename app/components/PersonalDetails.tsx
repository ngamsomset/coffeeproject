import React from 'react'

const PersonalDetails = ({ userDetails }: { userDetails: any }) => {
  const { fullname, birthdate, gender, nationality } = userDetails;

  // Function to format birthdate from YYYY-MM-DD to day-month-year format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Check if nationality, gender, and birthdate are defined and not empty
  const hasNationality = nationality && nationality.trim() !== '';
  const hasGender = gender && gender.trim() !== '';
  const hasBirthdate = birthdate && birthdate.trim() !== '';

  return (
    <div className='flex gap-10 items-center bg-[#E6CCB2] p-8 rounded-xl border shadow-xl h-full'>
      <div>
        <img src='/images/userAvatar.jpeg' className='rounded-full border' alt='User Avatar'></img>
      </div>
      <div className='flex flex-wrap h-fit gap-3'>
        <h2 className="text-3xl text-[#582F0E] w-full">Hi, {fullname}!</h2>
        <h3 className="text-2xl text-[#582F0E] w-full">Your details</h3>
        <div className='text-md'>
          {hasBirthdate ? (
            <p>Date of Birth: {formatDate(birthdate)}</p>
          ) : (
            <p>Date of Birth: <span className='italic'>Not defined</span></p>
          )}
          {hasGender ? (
            <p>Gender: {gender}</p>
          ) : (
            <p>Gender: <span className='italic'>Not defined</span></p>
          )}
          {hasNationality ? (
            <p>Nationality: {nationality}</p>
          ) : (
            <p>Nationality: <span className='italic'>Not defined</span></p>
          )}
        </div>
      </div>
    </div>

  )
}

export default PersonalDetails
