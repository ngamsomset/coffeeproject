"use client"
import React from 'react'
import { Card } from 'react-daisyui'

const CafeCard = () => {
  return (
    <Card className='transition duration-500 hover:scale-105'>
      <Card.Image src="/images/cafe_street.jpg" alt="Stock image of a cafe" />
      <Card.Body>
        <Card.Title tag="h2">Verve</Card.Title>
        <p>Location</p>
      </Card.Body>
    </Card>

  )
}

export default CafeCard
