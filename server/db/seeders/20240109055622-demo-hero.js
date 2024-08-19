'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          user_id: 1,
          name: 'Iphone 13',
          description: 'The most expensive phone',
          count: 1 ,
          price: 300,
          img: 'https://medialeaks.ru/wp-content/uploads/2022/09/photo_2022-09-08_09-44-54.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          name: 'Sumsung S22',
          description: 'The most expensive phone in the world',
          count: 1 ,
          price: 300,
          img: 'https://i.ytimg.com/vi/4WJKZx400t4/maxresdefault.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          name: 'SVO phone',
          description: 'The most expensive phone in the Russia',
          count: 1 ,
          price: 300_000,
          img: 'http://i.kym-cdn.com/photos/images/facebook/002/118/347/bcd.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          name: 'Taburetka',
          description: 'Mozhno sidet na taburetke',
          count: 1 ,
          price: 300,
          img: 'https://cpmarket.ru/image/catalog/products/1231/2bc7770fffd298296bc73de68a479f3b.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          name: 'Truhani',
          description: 'b/u',
          count: 1 ,
          price: 300,
          img: 'https://ae01.alicdn.com/kf/HTB1IBkXJFXXXXavXVXXq6xXFXXXg/-.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          name: 'Tapochki',
          description: 'Mozhno zapisat v Tapochki tvoyu mat',
          count: 1 ,
          price: 300,
          img: 'https://basket-02.wbbasket.ru/vol152/part15243/15243948/images/big/1.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};