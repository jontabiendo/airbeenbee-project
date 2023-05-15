'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if(process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
}

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'Spots';

      await queryInterface.bulkInsert(options, [
        {
          address: 'Calle Soldedad 29B',
          city: 'Madrid',
          state: 'Madrid',
          country: 'Spain',
          lat: 31.34567,
          lng:31.123456,
          name: 'Camarma',
          description: 'Spacious apartment close to the city center.',
          price: 200.00,
          ownerId: 1
        },
        {
          address: '944 Allen Dr',
          city: 'Wooster',
          state: 'Ohio',
          country: 'USA',
          lat: 31.34567,
          lng:31.123456,
          name: 'Triway',
          description: 'Small duplex close to amish country',
          price: 130.00,
          ownerId: 2
        },
        {
          address: 'Calle Sagitario 8 Casa 38',
          city: 'Zaragoza',
          state: 'Aragon',
          country: 'Spain',
          lat: 31.34567,
          lng:31.123456,
          name: 'Sta Magdalena Sofia',
          description: 'Large house close to nature walks and easy access to public transportation to the city center',
          price: 300.00,
          ownerId: 3
        }
      ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Spots'
    await queryInterface.bulkDelete(options, null, {})
  }
};
