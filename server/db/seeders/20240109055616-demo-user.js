'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Peter Qazaq',
          password: await bcrypt.hash('password123', 5),
          email: '123@sal.ru',
          isSaller: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Nicolas Siberian',
          password: await bcrypt.hash('password123', 5),
          email: '123@sall.ru',
          isSaller: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pasha',
          password: await bcrypt.hash('123', 5),
          email: '123@salll.ru',
          isSaller: false,
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