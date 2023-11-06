import { Product } from "../models/product.model.js";


export const addProduct = async (req, res) => {
  const data = req.body;
  console.log(data);

  try {
    const product = new Product(data);
    await product.save();
    res.status(200).send({ message: 'successful add product' });
  } catch (error) {
    res.send(error);
  }
};
