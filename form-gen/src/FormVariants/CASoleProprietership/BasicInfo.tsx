import { useFormContext } from 'react-hook-form'
import { ICASoleProprietership } from '../../interfaces/CASoleProprietership'
import { DateField, RadioField, TextField } from '../../ui'

const applicationTypeOptions = [
	{ value: 'New', label: 'New' },
	{ value: 'Update', label: 'Update' },
]

const BasicInfo = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<ICASoleProprietership>()

	return (
		<div className=''>
			<div className='bg-white p-6 rounded-lg shadow space-y-4 grid grid-cols-2 gap-4'>
        {/* Application Type as Checkbox group */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Application Type
          </label>
          <div className='flex gap-4'>
            {applicationTypeOptions.map((opt) => (
              <RadioField
                key={opt.value}
                label={opt.label}
                value={opt.value}
                {...register('applicationType')}
                // For react-hook-form, use value as array of selected
              />
            ))}
          </div>
        </div>

        {/* Application Date */}
        <DateField label='Date' {...register('applicationDate')} />

        <TextField
          label='CIF No.'
          type='text'
          inputMode='numeric'
          maxLength={11}
          pattern='\d{11}'
          placeholder='11 digit number'
          {...register('cifNo')}
        />

        <TextField
          label='Current Acc No.'
          type='text'
          inputMode='numeric'
          maxLength={11}
          pattern='\d{11}'
          placeholder='11 digit number'
          {...register('currentAccNo')}
        />

        <TextField
          label='CKYC No.'
          type='text'
          maxLength={15}
          placeholder='15 character string'
          {...register('ckycNo')}
        />

        <TextField
          label='Account Holder Type'
          type='text'
          maxLength={2}
          placeholder='2 character string'
          {...register('accountHolderType')}
        />

        <TextField
          label='US Reportable'
          type='text'
          maxLength={2}
          placeholder='2 character string'
          {...register('usReportable')}
        />
			</div>
		</div>
	)
}

export default BasicInfo
