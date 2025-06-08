import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, type FormData } from '../schemas/formSchema';
import { usePDFGenerator } from '../hooks/usePDFGenerator';
import { PDFTemplate } from './PDFTemplate';
import { useState } from 'react';
import {
  TextField,
  SelectField,
  CheckboxField,
  DateField,
  RangeField,
  TextAreaField,
  ColorField,
} from '../ui';

// ONLY FOR REFERENCE OF ARCHITECTURE
export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: 18,
      isStudent: false,
      newsletterSubscription: true,
      rating: 3,
    },
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: 18,
    isStudent: false,
    newsletterSubscription: true,
    rating: 3,
    birthDate: undefined,
  }
  const [formData, setFormData] = useState<FormData>(initialValues)
  const { generatePDF } = usePDFGenerator();
  
  const onSubmit = async (data: FormData) => {
    setFormData(data)
    // await generatePDF(data, );
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Comprehensive Form</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <TextField
                label="First Name"
                error={errors.firstName?.message}
                {...register('firstName')}
              />

              <TextField
                label="Last Name"
                error={errors.lastName?.message}
                {...register('lastName')}
              />
            </div>

            <TextField
              label="Email"
              type="email"
              error={errors.email?.message}
              {...register('email')}
            />

            <TextField
              label="Phone"
              type="tel"
              error={errors.phone?.message}
              {...register('phone')}
            />
          </div>

          {/* Personal Details */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <TextField
                label="Age"
                type="number"
                error={errors.age?.message}
                {...register('age', { valueAsNumber: true })}
              />

              <DateField
                label="Birth Date"
                error={errors.birthDate?.message}
                {...register('birthDate', { valueAsDate: true })}
              />
            </div>

            <SelectField
              label="Gender"
              options={[
                { value: '', label: 'Select gender' },
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' }
              ]}
              error={errors.gender?.message}
              {...register('gender')}
            />

            <CheckboxField
              label="Are you a student?"
              {...register('isStudent')}
            />
          </div>

          {/* Preferences */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>
            
            <ColorField
              label="Favorite Color"
              {...register('favoriteColor')}
            />

            <SelectField
              label="Preferred Language"
              options={[
                { value: '', label: 'Select language' },
                { value: 'english', label: 'English' },
                { value: 'spanish', label: 'Spanish' },
                { value: 'french', label: 'French' },
                { value: 'german', label: 'German' }
              ]}
              error={errors.preferredLanguage?.message}
              {...register('preferredLanguage')}
            />

            <CheckboxField
              label="Subscribe to newsletter"
              {...register('newsletterSubscription')}
            />
          </div>

          {/* Additional Information */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
            
            <TextAreaField
              label="Bio"
              rows={4}
              error={errors.bio?.message}
              {...register('bio')}
            />

            <TextField
              label="Website"
              type="url"
              error={errors.website?.message}
              {...register('website')}
            />

            <RangeField
              label="Rating (1-5)"
              min={1}
              max={5}
              error={errors.rating?.message}
              {...register('rating', { valueAsNumber: true })}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
      <div>
        <PDFTemplate data={formData} />
      </div>
    </>
  );
}