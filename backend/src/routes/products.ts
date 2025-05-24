import { Router, RequestHandler } from 'express';
import Product from '../models/Product';

const router = Router();

// Get all products
const getAllProducts: RequestHandler = async (_req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// Get single product
const getProductById: RequestHandler = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

// Create new product
const createProduct: RequestHandler = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    next(error);
  }
};

// Route handlers
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);

export default router; 