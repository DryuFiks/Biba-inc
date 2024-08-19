'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          user_id: 1,
          product_id: 1,
          text: 'It is my favorite!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          product_id: 2,
          text: 'Good product!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // добавьте больше комментариев по необходимости
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};