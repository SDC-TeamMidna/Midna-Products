const Product = require('../models/Product');

export.postProduct = async (req, res, next) => {
  // getting user data from req body
  const { name, slogan, description, category, default_price } = req.body;

  try {
    const product = new Product({ name, slogan, description, category, default_price });
    const result = await product.createProduct();
    res.send(product);
  } catch (err) {
    throw err;
  }
}