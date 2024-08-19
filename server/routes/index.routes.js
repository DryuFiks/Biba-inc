const express = require('express');
const router = express.Router();

const apiProductsRouter = require('./api/api.products.routes');
const apiFavoritesRouter = require('./api/api.favorites.routes');
const apiAuthRouter = require('./api/api.auth.routs');
const apiUsersRouter = require('./api/api.users.routes');

router.use('/api/products', apiProductsRouter);
router.use('/api/favorites', apiFavoritesRouter);
router.use('/api/auth', apiAuthRouter);
router.use('/api/users', apiUsersRouter);

module.exports = router;