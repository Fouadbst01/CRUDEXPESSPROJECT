'use strict';
var faker = require('faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    /* var role=["admin","guest","author"]
     const users = [...Array(20)].map((user) => (
      {
        username : faker.name.findName(),
        email : faker.internet.email(),
        password : faker.internet.password(),
        role : faker.random.arrayElement(role),
        createdAt : new Date(),
        updatedAt : new Date()
      }
     ))
    await queryInterface.bulkInsert('users',users,{});*/
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
