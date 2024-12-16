"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    product: {
        type: String,
        required: [true, 'Product is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
    },
    totalPrice: {
        type: Number,
        required: [true, 'Total price is required'],
    },
});
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
