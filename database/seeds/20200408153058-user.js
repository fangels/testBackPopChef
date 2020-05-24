'use strict'
const { generatePassword, } = require('../../services/password')
const { adminPassword, } = require('../../config/config.json')

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      firstName: 'admin',
      lastName: 'admin',
      password: await generatePassword(adminPassword),
      createdAt: '2020-04-08 19:24:00',
      updatedAt: '2020-04-08 19:24:00',
    },
  ]),

  down: (queryInterface, Sequelize) => {
  },
}
