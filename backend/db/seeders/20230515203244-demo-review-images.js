'use strict';

// const { mapFinderOptions } = require('sequelize/types/utils');
let options = {}
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
   options.tableName = 'ReviewImages';

   await queryInterface.bulkInsert(options, [
    {
      reviewId: 1,
      url: 'https://www.google.com/',
    },
    {
      reviewId: 1,
      url: 'https://www.google.com/',
    },
    {
      reviewId: 2,
      url: 'https://www.google.com/',
    },
    {
      reviewId: 3,
      url: 'https://www.google.com/',
    },
    {
      reviewId: 5,
      url: 'https://www.google.com/',
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
    options.tableName = 'ReviewImages';

    await queryInterface.bulkDelete(options, null, {})
  }
};
