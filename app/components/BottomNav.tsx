import Link from 'next/link';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from 'next/image'

const BottomNav = () => {
    return (
      <footer className='footer border z-10 border-l-transparent border-r-transparent text-white pb-0 border-b-transparent bg-[#EDE0D4]'>
          <div className='container pt-12 pb-12 flex flex-wrap justify-between mr-auto ml-auto px-4 mx-auto'>
            <div className='flex w-full md:w-auto justify-center md:mt-0 md:justify-normal flex-wrap'>
                <Image width="250" height="100" src={"/logos/Full_logo_Black.png"} className="py-auto"alt="CafeMate logo"></Image>
                <div className='md:ml-6 py-4 md:py-auto w-full text-center md:w-auto md:text-left'>
                    <Link href="/about" className='text-[#101010]'>About us</Link>
                    <br></br>
                    <Link href="/about" className='text-[#101010]'>Terms and conditions</Link>
                </div>
            </div>
            <div className='socials flex flex-row gap-2 justify-center md:justify-normal w-full md:w-auto md:my-auto'>
                <Link href="#" className="transition duration-500 hover:scale-125">
                    <FaFacebookSquare size={40} color='#101010'/>
                </Link>
                <Link href="#" className="transition duration-500 hover:scale-125">
                    <FaInstagramSquare size={40} color='#101010'/>
                </Link>
                <Link href="#" className="transition duration-500 hover:scale-125">
                    <FaSquareXTwitter size={40} color='#101010'/>
                </Link>
            </div> 
          </div>
      </footer>
    )
}

export default BottomNav
