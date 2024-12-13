import { z } from 'zod';

export const orderValidationSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' }),
  product: z.string().min(1, { message: 'Product is required' }),
  quantity: z.number({ required_error: 'Quantity is required' }),
  totalPrice: z.number({ required_error: 'Total price is required' }),
});
