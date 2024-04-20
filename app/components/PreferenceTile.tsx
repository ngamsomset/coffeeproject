import React from 'react'
import { CiCoffeeBean } from "react-icons/ci";
import { MdOutlineCoffeeMaker } from "react-icons/md";

const PreferenceTile = ({itemCount} : {itemCount:number}) => {
    return (
        <>
            <div className='bg-[#E6CCB2] p-8 rounded-xl border shadow-xl'>
                <h2 className='text-2xl'>Your preference</h2>
                <div className='text-[#582F0E] mt-4 flex'>
                    <CiCoffeeBean size={30} />
                    <div className='ml-4'>
                        <p>Origin: Colombia</p>
                        <p>Roast: Light</p>
                        <p>Acidity: High</p>
                        <p>Body: Low-medium</p>
                    </div>
                </div>
                <div className='text-[#582F0E] mt-4 flex'>
                    <MdOutlineCoffeeMaker size={30} />
                    <div className='ml-4'>
                        <p>Brewing method: Filter</p>
                    </div>
                </div>

            </div>
            <div className='p-8 rounded-xl border  mt-6 bg-[#E6CCB2]'>
                <p className=''>Cafés visited: {itemCount} / 304</p>
            </div>
        </>

    )
}

export default PreferenceTile
