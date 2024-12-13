import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (productData: TProduct) => {
  return await Product.create(productData);
};

export const ProductServices = {
  createProductIntoDB,
};
