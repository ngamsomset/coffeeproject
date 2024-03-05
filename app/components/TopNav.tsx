"use client"
import React from 'react'
import { Button, Dropdown, Navbar, Menu } from 'react-daisyui'

const TopNav = () => {
  return (
    <Navbar>
    <Navbar.Start>
      <div className="hidden lg:flex">
        <Menu horizontal className="px-1 text-xl">
          <Menu.Item><a href='/'>Home</a></Menu.Item>
          <Menu.Item><a href='/cafes'>Café</a></Menu.Item>
        </Menu>
      </div>
      <Dropdown>
        <Button tag="label" color="ghost" tabIndex={0} className="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </Button>
        <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-[1] bg-[#101010] text-white">
          <Dropdown.Item href='/'>Home</Dropdown.Item>
          <Dropdown.Item href='/cafes'>Café</Dropdown.Item>
          <Dropdown.Item href='/'>Account</Dropdown.Item>
          <Dropdown.Item href='/about'>About</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar.Start>
    <Navbar.Center className="hidden lg:flex">
      <a className="btn btn-ghost normal-case text-4xl" href='/'>cafeMATE</a>
    </Navbar.Center>
    <Navbar.End>
      <Menu horizontal className="px-1 hidden lg:flex text-xl">
        <Menu.Item><a href='#'>Account</a></Menu.Item>
        <Menu.Item><a href='/about'>About</a></Menu.Item>
      </Menu>
      <div className='flex lg:hidden'>
        <a className="btn btn-ghost normal-case text-xl" href='/'>cafeMATE</a>
      </div>
    </Navbar.End>
  </Navbar>
  )
}

export default TopNav
