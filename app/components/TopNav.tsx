"use client"
import React from 'react'
import { Button, Dropdown, Navbar, Menu } from 'react-daisyui'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react';

const TopNav = () => {
  const { data: session, status } = useSession();

  return (
    <Navbar>
      <Navbar.Start>
        {status === "authenticated" && (
          <div className="hidden lg:flex">
            <Menu horizontal className="px-1 text-xl">
              <Menu.Item><Link href='/'>Home</Link></Menu.Item>
              <Menu.Item><Link href='/cafes'>Cafés</Link></Menu.Item>
            </Menu>
          </div>
        )}
        {status === "authenticated" && (
          <Dropdown>
            <Button tag="label" color="ghost" tabIndex={0} className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-[1] bg-[#101010] text-white">
              <>
                <Dropdown.Item href='/'>Home</Dropdown.Item>
                <Dropdown.Item href='/cafes'>Café</Dropdown.Item>
                <Dropdown.Item href='/account'>Account</Dropdown.Item>
                <Dropdown.Item href='/about'>About</Dropdown.Item>
                <Dropdown.Item href='/api/auth/signout'>Signout</Dropdown.Item>
              </>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Navbar.Start>
      <Navbar.Center className="hidden lg:flex">
        <Link href={'/'} className="text-2xl md:text-5xl text-white font-semibold">
          <Image width="200" height="100" src={"/logos/top_logo_Black.png"} alt="CafeMate logo"></Image>
        </Link>
      </Navbar.Center>
      <Navbar.End>
        {status === "authenticated" && (
          <Menu horizontal className="px-1 hidden lg:flex text-xl">
            <Menu.Item><Link href='/account'>Account</Link></Menu.Item>
            <Menu.Item><Link href='/about'>About</Link></Menu.Item>
            <Menu.Item><Link href='/api/auth/signout'>Signout</Link></Menu.Item>
          </Menu>
        )}
        <div className='flex lg:hidden'>
          <Link href={'/'} className="text-2xl md:text-5xl text-white font-semibold">
            <Image width="150" height="100" src={"/logos/top_logo_Black.png"} alt="CafeMate logo"></Image>
          </Link>
        </div>
      </Navbar.End>
    </Navbar>
  );
}

export default TopNav;
