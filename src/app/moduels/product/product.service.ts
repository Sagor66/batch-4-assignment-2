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

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
};
