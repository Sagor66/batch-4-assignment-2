import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (productData: TProduct) => {
  return await Product.create(productData);
};

const getAllProductFromDB = async (
  title: string,
  author: string,
  category: string,
) => {
  if (title) {
    return await Product.find({ title });
  } else if (author) {
    return await Product.find({ author });
  } else if (category) {
    return await Product.find({ category });
  } else {
    return await Product.find();
  }
};

const getSingleProductFromDB = async (productId: string) => {
  return await Product.findOne({ _id: productId });
};

const updateSingleProductFromDB = async (
  productId: string,
  productData: Partial<TProduct>,
) => {
  return await Product.updateOne({ _id: productId }, { $set: productData });
};

const deleteSingleProductFromDB = async (productId: string) => {
  return await Product.deleteOne({ _id: productId });
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteSingleProductFromDB,
};
