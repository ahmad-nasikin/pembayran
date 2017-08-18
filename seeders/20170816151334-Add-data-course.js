'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Courses', [{
      course_name: 'Bahasa Inggris',
      price: '500000',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      course_name: 'Bahasa Indonesia',
      price: '400000',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      course_name: 'Matematika',
      price: '600000',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      course_name: 'Bahasa Jawa',
      price: '20000000',
      createdAt: new Date(),
      updatedAt: new Date()
    } ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
