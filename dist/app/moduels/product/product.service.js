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
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
const createProductIntoDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.Product.create(productData);
});
const getAllProductFromDB = (title, author, category) => __awaiter(void 0, void 0, void 0, function* () {
    if (title) {
        return yield product_model_1.Product.find({ title });
    }
    else if (author) {
        return yield product_model_1.Product.find({ author });
    }
    else if (category) {
        return yield product_model_1.Product.find({ category });
    }
    else {
        return yield product_model_1.Product.find();
    }
});
const getSingleProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.Product.findOne({ _id: productId });
});
const updateSingleProductFromDB = (productId, productData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.Product.updateOne({ _id: productId }, { $set: productData });
});
const deleteSingleProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.Product.deleteOne({ _id: productId });
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    updateSingleProductFromDB,
    deleteSingleProductFromDB,
};
