
const router = require('express').Router();
const { Product, Like } = require('../../db/models');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/email');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
  const filters = req.query;
  try {
    const products = await Product.findAll().then((products) => {
      if (filters.name.length) {
        return products.filter((product) => product.name.includes(filters.name));
      }
      if (filters.price > 0) {
        return products.filter((product) => product.price === filters.price);
      }
      if (filters.sortBy === 'name') {
        return products.sort((a, b) => a.name.localeCompare(b.name));
      } else if (filters.sortBy === 'price') {
        return products.sort((a, b) => a.price - b.price);
      }
      if(filters.sortOrder === SORT_ORDER.ASC) {
        return products;
      }else if(filters.sortOrder === SORT_ORDER.DESC) {
        return products.reverse();
      }
    })
    res.json({ products });
  } catch ({ message }) {
    res.json({ type: 'products router', message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, description, price, count, email } = req.body;
    // const newFileUrl = `/email/${req.file.originalname}`;
    const product = await Product.create({
      name,
      description,
      price,
      count,
      email,
      user_id: res.locals.user.id,
    });
    // const currentproduct = await product.findOne({ where: { id: product.id }, include: Like });
    res.json({
      product,
    });
  } catch ({ message }) {
    res.json({ type: 'products router', message });
  }
});

router.delete('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await Product.destroy({ where: { id: productId } });
    if (result > 0) {
      res.json({ message: 'success', productId });
      return;
    }
    res.json({ message: 'Не твоя, вот ты и бесишься' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, description, price, count, email } = req.body;
    const [result] = await Product.update(
      { name, description, price, count, email },
      { where: { id: productId, user_id: res.locals.user.id } }
    );
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'Не твоя, вот ты и бесишься' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
