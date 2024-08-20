const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const indexRouter = require('./routes/index.routes');
// const getUser = require('./middleware/getUser');
const { verifyAccessToken } = require('./middleware/verefyJWT');

app.use(cookieParser());
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(ssr);
app.use(verifyAccessToken);
// app.use(getUser);

app.use('/', indexRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `Я ебашу на ${PORT} порту. Режим: ${process.env.NODE_ENV}`
  );
});