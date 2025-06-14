import React from 'react'

interface DataFieldProps {
	label: string
	value: string | number | string[]
	required?: boolean
	fieldHelper?: string
}

const DataField: React.FC<DataFieldProps> = ({
	label,
	value,
	fieldHelper,
	required = false,
}) => {
	const displayValue = Array.isArray(value) ? value.join(', ') : value

	return (
		<div className='flex items-start text-small gap-2'>
			{fieldHelper ? (
				<>
					<div className='flex flex-col uppercase'>
						<div className='flex items-start gap-2'>
							<span className='font-medium '>
								{label}
								{required && <span className='ml-1'>*</span>} :{' '}
							</span>
              <span>{displayValue}</span>
						</div>
						<span className='text-tiny'>{fieldHelper}</span>
					</div>
				</>
			) : (
				<>
					<div className='flex items-start font-medium uppercase flex-col'>
						<span className=''>
							{label}
							{required && <span className='ml-1'>*</span>} :{' '}
						</span>
					</div>
					<span>{displayValue}</span>
				</>
			)}
		</div>
	)
}

export default DataField
