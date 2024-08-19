
const router = require('express').Router();
const { Product, Like } = require('../../db/models');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json({ products });
  } catch ({ message }) {
    res.json({ type: 'products router', message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, description, price, count, img } = req.body;
    // const newFileUrl = `/img/${req.file.originalname}`;
    const product = await Product.create({
      name,
      description,
      price,
      count,
      img,
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
    const { name, description, price, count, img } = req.body;
    const [result] = await Product.update(
      { name, description, price, count, img },
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
