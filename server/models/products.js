import mongoose from 'mongoose';


const prodctSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, required: true },
  description: { type: String, required: true },
});

const Product = mongoose.model('Product', prodctSchema);

export default Product;