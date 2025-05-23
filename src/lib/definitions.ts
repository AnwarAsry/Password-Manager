import { z } from 'zod'
 
export const CredentialFormSchema = z.object({
    platform: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z.string().min(1, { message: 'Password is required.' }).trim(),
})