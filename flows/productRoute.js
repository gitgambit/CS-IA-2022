import express from 'express';
import Product from '../models/products.js';
import { products } from '../product.js';

const productRouter = express.Router();

  productRouter.get('/', async (req, res) => {
      const products = await Product.find({});
      res.send(products);
  });

  productRouter.get('/seed', async(req,res) => {
    const createdProducts = await Product.insertMany(products);
    res.send( {createdProducts} );
  });

  productRouter.get('/:id', async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found.' });
    }
  });
  
export default productRouter;