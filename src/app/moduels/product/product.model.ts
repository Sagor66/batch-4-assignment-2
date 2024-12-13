import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>({
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
      message:
        "Category can only be the following 'Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'",
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

export const Product = model<TProduct>('Product', productSchema);
