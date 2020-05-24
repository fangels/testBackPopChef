'use strict'

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Products', [
    {
      title: 'product1',
      description: 'i am the 1 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    }, {
      title: 'product2',
      description: 'i am the 2 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    }, {
      title: 'product3',
      description: 'i am the 3 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    }, {
      title: 'product4',
      description: 'i am the 4 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    }, {
      title: 'product5',
      description: 'i am the 5 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    }, {
      title: 'product6',
      description: 'i am the 6 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    }, {
      title: 'product7',
      description: 'i am the 7 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    }, {
      title: 'product8',
      description: 'i am the 8 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    }, {
      title: 'product9',
      description: 'i am the 9 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    }, {
      title: 'product10',
      description: 'i am the 10 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    }, {
      title: 'product11',
      description: 'i am the 11 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    }, {
      title: 'product12',
      description: 'i am the 12 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    }, {
      title: 'product13',
      description: 'i am the 13 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    }, {
      title: 'product14',
      description: 'i am the 14 product',
      nbInStock: Math.floor(Math.random() * Math.floor(50)),
    },
  ]),

  down: (queryInterface, Sequelize) => {
  },
}
