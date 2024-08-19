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
          img: 12345,
          isSaller: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Nicolas Siberian',
          password: await bcrypt.hash('password123', 5),
          img: 67890,
          isSaller: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pasha',
          password: await bcrypt.hash('123', 5),
          img: 67123,
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