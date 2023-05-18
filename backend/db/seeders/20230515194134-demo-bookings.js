'use strict';

// const { mapFinderOptions } = require('sequelize/types/utils');

let options = {};
if(process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
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
   options.tableName = 'Bookings';

   await queryInterface.bulkInsert(options, [
    {
      spotId: 1,
      userId: 2,
      startDate: new Date('2020-12-1'),
      endDate: new Date('2020-12-7'),
    },{
      spotId: 1,
      userId: 3,
      startDate: new Date('2021-1-3'),
      endDate: new Date('2021-1-20'),
    },{
      spotId: 2,
      userId: 1,
      startDate: new Date('2022-2-3'),
      endDate: new Date('2022-2-12'),
    },{
      spotId: 2,
      userId: 2 ,
      startDate: new Date('2023-3-5'),
      endDate: new Date('2023-3-13'),
    },{
      spotId: 3,
      userId: 3,
      startDate: new Date('2024-4-5'),
      endDate: new Date('2024-4-24'),
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
    options.tableName = 'Bookings';
    await queryInterface.bulkDelete(options, null, {})
  }
};
