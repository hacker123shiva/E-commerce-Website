// import express from 'express';
// import Product from '../models/productModel.js';
// import data from '../data.js';

// const seedRouter = express.Router();

// seedRouter.get('/', async (req, res) => {
//   await Product.remove({});
//   const createdProducts = await Product.insertMany(data.products);
//   res.send({ createdProducts });
// });
// export default seedRouter;

// import express from 'express';
// import Product from '../models/productModel.js';
// import data from '../data.js';

// const seedRouter = express.Router();

// seedRouter.get('/', async (req, res) => {
//   // await Product.remove({});
//   const createdProducts = await Product.insertMany(data.products);
//   res.send({ createdProducts });
// });
// export default seedRouter;

import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({}); //remove all products from the database
  const createdProducts = await Product.insertMany(data.products);
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;
