import React from 'react'
import { twMerge } from 'tailwind-merge'
import BranchStampContainer from './BranchStampContainer'
import SbiLogo from './SbiLogo'

interface FormHeaderProps {
  heading: string
}
const FormHeader: React.FC<FormHeaderProps> = ({
  heading
}) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between'>
        <div className='w-48 flex items-end'>
          <SbiLogo />
        </div>
        <BranchStampContainer />
      </div>
      <div className={twMerge('w-full', 'bg-primary', 'text-white', 'font-bold', 'text-xl', 'p-1.5', 'flex', 'justify-center')}>
        <h2>{heading}</h2>
      </div>
    </div>
  )
}

export default FormHeader