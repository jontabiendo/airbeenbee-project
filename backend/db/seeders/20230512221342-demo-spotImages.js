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
   options.tableName = 'SpotImages';
   
   await queryInterface.bulkInsert(options, [
    {
      spotId: 1,
      url: 'https://media.nomadicmatt.com/2023/madriditinerary.jpeg',
      preview: true
    },
    {
      spotId: 1,
      url: 'https://media.nomadicmatt.com/2023/madriditinerary.jpeg',
      preview: false
    },
    {
      spotId: 1,
      url: 'https://media.nomadicmatt.com/2023/madriditinerary.jpeg',
      preview: true
    },
    {
      spotId: 1,
      url: 'https://media.nomadicmatt.com/2023/madriditinerary.jpeg',
      preview: false
    },
    {
      spotId: 1,
      url: 'https://media.nomadicmatt.com/2023/madriditinerary.jpeg',
      preview: true
    },
    {
      spotId: 2,
      url: 'https://cdn.shortpixel.ai/spai/q_lossy+w_450+to_we…/wp-content/uploads/things-to-do-in-cleveland.jpg',
      preview: true
    },
    {
      spotId: 2,
      url: 'https://cdn.shortpixel.ai/spai/q_lossy+w_450+to_we…/wp-content/uploads/things-to-do-in-cleveland.jpg',
      preview: false
    },
    {
      spotId: 2,
      url: 'https://cdn.shortpixel.ai/spai/q_lossy+w_450+to_we…/wp-content/uploads/things-to-do-in-cleveland.jpg',
      preview: false
    },
    {
      spotId: 2,
      url: 'https://cdn.shortpixel.ai/spai/q_lossy+w_450+to_we…/wp-content/uploads/things-to-do-in-cleveland.jpg',
      preview: false
    },
    {
      spotId: 2,
      url: 'https://cdn.shortpixel.ai/spai/q_lossy+w_450+to_we…/wp-content/uploads/things-to-do-in-cleveland.jpg',
      preview: false
    },
    {
      spotId: 3,
      url: 'https://i.natgeofe.com/n/9af61596-c407-4dd4-a563-66574f8b19f3/weekender2b147a6hr_square.jpg',
      preview: true
    },
    {
      spotId: 3,
      url: 'https://i.natgeofe.com/n/9af61596-c407-4dd4-a563-66574f8b19f3/weekender2b147a6hr_square.jpg',
      preview: false
    },
    {
      spotId: 3,
      url: 'https://i.natgeofe.com/n/9af61596-c407-4dd4-a563-66574f8b19f3/weekender2b147a6hr_square.jpg',
      preview: false
    },
    {
      spotId: 3,
      url: 'https://i.natgeofe.com/n/9af61596-c407-4dd4-a563-66574f8b19f3/weekender2b147a6hr_square.jpg',
      preview: false
    },
    {
      spotId: 3,
      url: 'https://i.natgeofe.com/n/9af61596-c407-4dd4-a563-66574f8b19f3/weekender2b147a6hr_square.jpg',
      preview: false
    },
    {
      spotId: 4,
      url: 'https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg',
      preview: true
    },
    {
      spotId: 4,
      url: 'https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg',
      preview: false
    },
    {
      spotId: 4,
      url: 'https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg',
      preview: false
    },
    {
      spotId: 4,
      url: 'https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg',
      preview: false
    },
    {
      spotId: 4,
      url: 'https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg',
      preview: false
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
    options.tableName = 'SpotImages'
    await queryInterface.bulkDelete(options, null, {})
  }
};
