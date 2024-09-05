'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Peter',
          password: await bcrypt.hash('password123', 5),
          email: '123@sal.ru',
          roll: 'ADMIN',
          banned: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Nicolas',
          password: await bcrypt.hash('password123', 5),
          email: '1234@sall.ru',
          roll: 'USER',
          banned: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pasha',
          password: await bcrypt.hash('123', 5),
          email: '12345@salll.ru',
          roll: 'SALLER',
          banned: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Superman',
          password: await bcrypt.hash('123', 5),
          email: '123456@salll.ru',
          roll: 'SALLER',
          banned: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'HUY',
          password: await bcrypt.hash('123', 5),
          email: '1234567@salll.ru',
          roll: 'USER',
          banned: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};