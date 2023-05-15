'use strict';

// const { mapFinderOptions } = require('sequelize/types/utils');
let options = {};
if(process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
};

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
   options.tableName = 'Reviews';

   await queryInterface.bulkInsert(options, [
    {
      spotId: 1,
      userId: 2,
      review: 'It was lovely. Would recommend',
      stars: 2
    },{
      spotId: 2,
      userId: 3,
      review: 'Peter Griffin dies in Endgame',
      stars: 3
    },{
      spotId: 3,
      userId: 1,
      review: 'The beach glowed with an iridescent beauty',
      stars: 4
    },{
      spotId: 1,
      userId: 2,
      review: 'Loved the rich corinthian leather couch',
      stars: 5
    },{
      spotId: 2,
      userId: 3,
      review: 'I need to speak to the manager',
      stars: 1
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
    options.tableName = 'Reviews';

    await queryInterface.bulkDelete(options, null, {})
  }
};
