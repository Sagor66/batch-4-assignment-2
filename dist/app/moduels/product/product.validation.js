"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateValidationSchema = exports.productValidationSchema = void 0;
const zod_1 = require("zod");
exports.productValidationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, { message: 'Product title is required' }),
    author: zod_1.z.string().min(1, { message: 'Author is required' }),
    price: zod_1.z.number({ required_error: 'Price is required' }),
    category: zod_1.z.enum(['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'], {
        errorMap: () => ({
            message: "Category can only be the following 'Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'",
        }),
    }),
    description: zod_1.z.string().min(1, { message: 'Description is required' }),
    quantity: zod_1.z.number({ required_error: 'Quantity is required' }),
    inStock: zod_1.z.boolean({ required_error: 'InStock is required' }),
});
exports.productUpdateValidationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, { message: 'Product title is required' }).optional(),
    author: zod_1.z.string().min(1, { message: 'Author is required' }).optional(),
    price: zod_1.z.number({ required_error: 'Price is required' }).optional(),
    category: zod_1.z
        .enum(['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'], {
        errorMap: () => ({
            message: "Category can only be the following 'Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'",
        }),
    })
        .optional(),
    description: zod_1.z
        .string()
        .min(1, { message: 'Description is required' })
        .optional(),
    quantity: zod_1.z.number({ required_error: 'Quantity is required' }).optional(),
    inStock: zod_1.z.boolean({ required_error: 'InStock is required' }).optional(),
});
