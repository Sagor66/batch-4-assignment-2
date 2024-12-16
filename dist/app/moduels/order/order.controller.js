"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = require("./order.validation");
const product_service_1 = require("../product/product.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const zodParsedData = order_validation_1.orderValidationSchema.parse(orderData);
        const isProductExist = yield product_service_1.ProductServices.getSingleProductFromDB(zodParsedData === null || zodParsedData === void 0 ? void 0 : zodParsedData.product);
        if (!isProductExist) {
            throw new Error('Product does not exist');
        }
        if (!(isProductExist === null || isProductExist === void 0 ? void 0 : isProductExist.inStock)) {
            throw new Error('Product is out of stock');
        }
        if ((isProductExist === null || isProductExist === void 0 ? void 0 : isProductExist.quantity) < (orderData === null || orderData === void 0 ? void 0 : orderData.quantity)) {
            throw new Error(`Only ${isProductExist === null || isProductExist === void 0 ? void 0 : isProductExist.quantity} products available`);
        }
        const result = yield order_service_1.OrderServices.createOrderIntoDB(zodParsedData);
        const remainingProduct = (isProductExist === null || isProductExist === void 0 ? void 0 : isProductExist.quantity) - (orderData === null || orderData === void 0 ? void 0 : orderData.quantity);
        const updateProductData = {
            quantity: remainingProduct,
        };
        if (!remainingProduct) {
            updateProductData['inStock'] = false;
        }
        yield product_service_1.ProductServices.updateSingleProductFromDB(orderData === null || orderData === void 0 ? void 0 : orderData.product, updateProductData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: true,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
});
const getTotalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.getTotalRevenueFromDB();
        res.status(200).json({
            success: true,
            message: 'Revenue calculated successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: true,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getTotalRevenue,
};
