"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
exports.orderValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .email({ message: 'Invalid email address' })
        .min(1, { message: 'Email is required' }),
    product: zod_1.z.string().min(1, { message: 'Product is required' }),
    quantity: zod_1.z.number({ required_error: 'Quantity is required' }),
    totalPrice: zod_1.z.number({ required_error: 'Total price is required' }),
});
