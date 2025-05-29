import React from 'react'

interface CardProps {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex flex-col rounded-md shadow-sm transition-shadow py-4 px-8">
      {children}
    </div>
  )
}

export default Card