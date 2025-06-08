import { z } from 'zod';

export const formSchema = z.object({
  // Basic Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  
  // Personal Details
  age: z.number().min(18, "Must be at least 18 years old").max(100, "Invalid age"),
  birthDate: z.date().optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
  isStudent: z.boolean().optional(),
  
  // Preferences
  favoriteColor: z.string().optional(),
  preferredLanguage: z.enum(["english", "spanish", "french", "german"]).optional(),
  newsletterSubscription: z.boolean().optional(),
  
  // Additional Information
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  website: z.string().url("Invalid URL").optional(),
  rating: z.number().min(1).max(5).optional(),
});

export type FormData = z.infer<typeof formSchema>; 
