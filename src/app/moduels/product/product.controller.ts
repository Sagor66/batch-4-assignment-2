import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import {
  productUpdateValidationSchema,
  productValidationSchema,
} from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodParsedData = productValidationSchema.parse(productData);

    const result = await ProductServices.createProductIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Book created successfully',
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

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { title, author, category } = req.query;
    const result = await ProductServices.getAllProductFromDB(
      title,
      author,
      category,
    );

    res.status(200).json({
      success: true,
      message: 'Books retrieved successfully',
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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Book retrieved successfully',
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

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    const zodParsedData = productUpdateValidationSchema.parse(productData);

    await ProductServices.updateSingleProductFromDB(productId, zodParsedData);

    const updatedResult =
      await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: updatedResult,
    });
  } catch (err: any) {
    res.status(500).json({
      success: true,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
};
