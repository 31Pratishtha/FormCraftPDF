import SubHeading from '../../ui/SubHeading'
import { useFormContext } from 'react-hook-form'
import { ICASoleProprietership } from '../../interfaces/CASoleProprietership'
import { TextField, DateField } from '../../ui'

const BasicInfo = () => {
  const { register, formState: { errors } } = useFormContext<ICASoleProprietership>()
  
  return (
    <div className="space-y-6">
      <SubHeading 
        title={'CURRENT ACCOUNT OPENING FORM FOR SOLE PROPRIETORSHIP FIRM'} 
        className='py-2 font-bold text-lg' 
      />
      
      <div className='bg-white p-6 rounded-lg shadow space-y-4'>
        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="Full Name"
            {...register('name')}
          />
          
          <TextField
            label="Email Address"
            type="email"
            {...register('email')}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="Phone Number"
            {...register('phone')}
          />
          
          <TextField
            label="PAN Number"
            {...register('panNumber')}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="Business Name"
            {...register('businessName')}
          />
          
          <DateField
            label="Date of Birth"
            {...register('dateOfBirth', { valueAsDate: true })}
          />
        </div>
      </div>
    </div>
  )
}

export default BasicInfo