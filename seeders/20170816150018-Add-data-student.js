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
    return queryInterface.bulkInsert('Students', [{
      name: 'Jaenal Arif',
      gender: 'Laki-laki',
      address: 'Jakarta',
      email: 'jaenal@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ahmad Nasikin',
      gender: 'Laki-laki',
      address: 'Jakarta',
      email: 'ahmad@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Budi P',
      gender: 'Laki-laki',
      address: 'Bogor',
      email: 'budi@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ari Dwi',
      gender: 'Laki-laki',
      address: 'Bandung',
      email: 'ari@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
