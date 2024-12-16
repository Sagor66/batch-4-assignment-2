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
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const zodParsedData = product_validation_1.productValidationSchema.parse(productData);
        const result = yield product_service_1.ProductServices.createProductIntoDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: 'Book created successfully',
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
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, category } = req.query;
        const result = yield product_service_1.ProductServices.getAllProductFromDB(title, author, category);
        res.status(200).json({
            success: true,
            message: 'Books retrieved successfully',
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
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Book retrieved successfully',
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
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        const zodParsedData = product_validation_1.productUpdateValidationSchema.parse(productData);
        yield product_service_1.ProductServices.updateSingleProductFromDB(productId, zodParsedData);
        const updatedResult = yield product_service_1.ProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: updatedResult,
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
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
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
exports.ProductControllers = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
};
