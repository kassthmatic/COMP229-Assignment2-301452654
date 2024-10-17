const Products = require('../models/Marketplace');

//GET /api/products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

//GET /api/products/:id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

//POST /api/products
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

//PUT /api/products
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).send();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

//DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

//DELETE /api/products
exports.deleteAllProducts = async (req, res) => {
    try {
      await Product.deleteMany({});
      res.status(200).send({ message: 'All products deleted' });
    } catch (error) {
      res.status(400).send(error);
    }
  };

//GET api/products?name=[kw]
exports.getProductsByName = async (req, res) => {
  try {
    const name = req.query.name;
    const products = await Product.find({ name: { $regex: name, $options: 'i' } });
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};