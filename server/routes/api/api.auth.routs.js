const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');
const configJWT = require('../../middleware/configJWT');

router.post('/sign-in', async (req, res) => {
  let user;
  try {
    const { email, password } = req.body;
    
    user = await User.findOne({ where: { email } });
    if (!user) {
      res.json({ message: 'Такого пользователя нет или пароль неверный' });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      res.json({ message: 'Такого пользователя нет или пароль неверный' });
      return;
    }
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, email: user.email },
    });

    // устанавливаем куки
    res.cookie('access', accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });
    const { password: userPassword, ...userWithoutPassword } = user.dataValues;
    
    res.locals.user = user;
    res.json({ message: 'success', user:userWithoutPassword });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/sign-up', async (req, res) => {
  let user;
  try {
    const { name, email, password, rpassword } = req.body;
    if (password !== rpassword) {
      res.status(400).json({ message: 'Пароли не совпадают!' });
      return;
    }
    user = await User.findOne({ where: { name } });
    if (user) {
      res.status(400).json({ message: 'Такой пользователь уже есть!' });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    user = await User.create({ name, password: hash, email });

    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, email: user.email },
    });

    // устанавливаем куки
    res.cookie('access', accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });
    const { password: userPassword, ...userWithoutPassword } = user.dataValues;
    res.locals.user = user;
    res.status(200).json({ message: 'success',  user: userWithoutPassword,  });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/check', async (req, res) => {
  if (res.locals.user) {
    const user = await User.findOne({ where: { id: res.locals.user.id } });
    const { password: userPassword, ...userWithoutPassword } = user.dataValues;
    res.json(userWithoutPassword); 
    return;
  }
  res.json({});
});

router.get('/logout', (req, res) => {
  res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
  res.json({ message: 'success' });
});

module.exports = router;