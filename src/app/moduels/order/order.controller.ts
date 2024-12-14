import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { orderValidationSchema } from './order.validation';
import { ProductServices } from '../product/product.service';
import { TProduct } from '../product/product.interface';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const zodParsedData = orderValidationSchema.parse(orderData);

    const isProductExist = await ProductServices.getSingleProductFromDB(
      zodParsedData?.product,
    );

    if (!isProductExist) {
      throw new Error('Product does not exist');
    }

    if (!isProductExist?.inStock) {
      throw new Error('Product is out of stock');
    }

    if (isProductExist?.quantity < orderData?.quantity) {
      throw new Error(`Only ${isProductExist?.quantity} products available`);
    }

    const result = await OrderServices.createOrderIntoDB(zodParsedData);

    const remainingProduct = isProductExist?.quantity - orderData?.quantity;

    const updateProductData: Partial<TProduct> = {
      quantity: remainingProduct,
    };

    if (!remainingProduct) {
      updateProductData['inStock'] = false;
    }

    await ProductServices.updateSingleProductFromDB(
      orderData?.product,
      updateProductData,
    );

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: true,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getTotalRevenueFromDB();
    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: true,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getTotalRevenue,
};
