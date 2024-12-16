"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'Product title is required'],
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    category: {
        type: String,
        enum: {
            values: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
            message: "Category can only be the following 'Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'",
        },
        required: [true, 'Category is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
    },
    inStock: {
        type: Boolean,
        required: [true, 'InStock is required'],
    },
});
exports.Product = (0, mongoose_1.model)('Product', productSchema);
