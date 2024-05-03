import React from 'react'

const CafeCount = ({itemCount, totalCafes} : {itemCount:number, totalCafes:number}) => {
    return (
        <div className='p-8 rounded-xl border  mt-6 bg-[#E6CCB2]'>
            <p className=''>Cafés visited: {itemCount} / {totalCafes}</p>
        </div>
    )
}

export default CafeCount
