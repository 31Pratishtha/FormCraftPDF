import React from 'react'
import { twMerge } from 'tailwind-merge';

interface SubHeadingProps {
  title: string;
  className?: string;  
}

const SubHeading: React.FC<SubHeadingProps> = ({ title, className }) => {
  return (
    <div className={twMerge('w-full', 'bg-blue-950', 'text-white', className)}>
      <h3>{title}</h3>
    </div>
  )
}

export default SubHeading