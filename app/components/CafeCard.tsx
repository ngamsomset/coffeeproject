"use client"
import React from 'react'
import { Card } from 'react-daisyui'
import Link from 'next/link'

const CafeCard = ({name, location, slug, imagePath} : {name:any, location:any, slug:any, imagePath:any}) => {
  return (
    <Link href={slug}>
    <Card className='transition duration-500 hover:scale-105 w-[80vw] md:w-auto mx-auto mb-5'>
      <Card.Image src={imagePath} alt="Stock image of a cafe" />
      <Card.Body>
        <Card.Title tag="h2">{name}</Card.Title>
        <p>{location}</p>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default CafeCard
