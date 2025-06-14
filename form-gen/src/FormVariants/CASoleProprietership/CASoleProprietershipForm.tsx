import { FormProvider, useForm } from 'react-hook-form'
import BasicInfo from './BasicInfo'
import CASoleProprietershipTemplate from './CASoleProprietershipTemplate'
import { ICASoleProprietership } from '../../interfaces/CASoleProprietership'
import { usePDFGenerator } from '../../hooks/usePDFGenerator'
import { useState } from 'react'
import FormTemplateContainer from '../../components/FormWrapper'

const CASoleProprietershipForm = () => {
	const methods = useForm<ICASoleProprietership>()
	const [formData, setFormData] = useState<ICASoleProprietership>()
	const { generatePDF } = usePDFGenerator<ICASoleProprietership>()

	console.log('formdata', formData)
	const onSubmit = async (data: ICASoleProprietership) => {
		//handle submit
		setFormData(data)
		await generatePDF(data, CASoleProprietershipTemplate)
	}
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<BasicInfo />
				<button
					type='submit'
					className='px-6 py-3 bg-indigo-600'>
					Submit
				</button>
			</form>
			<FormTemplateContainer>
				<CASoleProprietershipTemplate data={methods.watch()} />
			</FormTemplateContainer>
		</FormProvider>
	)
}

export default CASoleProprietershipForm
