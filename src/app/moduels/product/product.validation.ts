import { z } from 'zod';

export const productValidationSchema = z.object({
  title: z.string().min(1, { message: 'Product title is required' }),
  author: z.string().min(1, { message: 'Author is required' }),
  price: z.number({ required_error: 'Price is required' }),
  category: z.enum(
    ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
    {
      errorMap: () => ({
        message:
          "Category can only be the following 'Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'",
      }),
    },
  ),
  description: z.string().min(1, { message: 'Description is required' }),
  quantity: z.number({ required_error: 'Quantity is required' }),
  inStock: z.boolean({ required_error: 'InStock is required' }),
});

export const productUpdateValidationSchema = z.object({
  title: z.string().min(1, { message: 'Product title is required' }).optional(),
  author: z.string().min(1, { message: 'Author is required' }).optional(),
  price: z.number({ required_error: 'Price is required' }).optional(),
  category: z
    .enum(['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'], {
      errorMap: () => ({
        message:
          "Category can only be the following 'Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'",
      }),
    })
    .optional(),
  description: z
    .string()
    .min(1, { message: 'Description is required' })
    .optional(),
  quantity: z.number({ required_error: 'Quantity is required' }).optional(),
  inStock: z.boolean({ required_error: 'InStock is required' }).optional(),
});
