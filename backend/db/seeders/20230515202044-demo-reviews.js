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
    },{
      "spotId": 1,
      "userId": 5,
      "review": "Great location and amenities!",
      "stars": 4
    },
    {
      "spotId": 1,
      "userId": 12,
      "review": "Had an amazing time. Highly recommend!",
      "stars": 5
    },
    {
      "spotId": 1,
      "userId": 20,
      "review": "Clean and cozy place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 1,
      "userId": 25,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 1,
      "userId": 32,
      "review": "Host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 2,
      "userId": 1,
      "review": "Stunning views and beautiful decor.",
      "stars": 5
    },
    {
      "spotId": 2,
      "userId": 8,
      "review": "The perfect getaway spot!",
      "stars": 5
    },
    {
      "spotId": 2,
      "userId": 15,
      "review": "A bit far from the city, but worth it.",
      "stars": 4
    },
    {
      "spotId": 2,
      "userId": 28,
      "review": "Quiet and peaceful surroundings.",
      "stars": 4
    },
    {
      "spotId": 2,
      "userId": 33,
      "review": "Had a great time with family.",
      "stars": 5
    },
    {
      "spotId": 3,
      "userId": 12,
      "review": "Amazing location and great hospitality!",
      "stars": 5
    },
    {
      "spotId": 3,
      "userId": 25,
      "review": "Loved the amenities and the view!",
      "stars": 4
    },
    {
      "spotId": 3,
      "userId": 7,
      "review": "Had a wonderful time with family.",
      "stars": 5
    },
    {
      "spotId": 3,
      "userId": 15,
      "review": "Comfortable and cozy stay.",
      "stars": 4
    },
    {
      "spotId": 3,
      "userId": 32,
      "review": "Host was very friendly and helpful.",
      "stars": 5
    },
    {
      "spotId": 4,
      "userId": 5,
      "review": "Stunning views and beautiful decor.",
      "stars": 5
    },
    {
      "spotId": 4,
      "userId": 19,
      "review": "Clean and well-maintained property.",
      "stars": 4
    },
    {
      "spotId": 4,
      "userId": 21,
      "review": "Perfect spot for a weekend getaway.",
      "stars": 5
    },
    {
      "spotId": 4,
      "userId": 9,
      "review": "Had a relaxing stay. Recommended!",
      "stars": 4
    },
    {
      "spotId": 4,
      "userId": 28,
      "review": "The host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 5,
      "userId": 2,
      "review": "Amazing spot! Loved the location.",
      "stars": 5
    },
    {
      "spotId": 5,
      "userId": 10,
      "review": "Cozy and comfortable stay.",
      "stars": 4
    },
    {
      "spotId": 5,
      "userId": 18,
      "review": "Great amenities and friendly host.",
      "stars": 5
    },
    {
      "spotId": 5,
      "userId": 23,
      "review": "Clean and well-maintained property.",
      "stars": 4
    },
    {
      "spotId": 5,
      "userId": 31,
      "review": "Had a wonderful time with friends.",
      "stars": 5
    },
    {
      "spotId": 6,
      "userId": 3,
      "review": "Awesome views from the spot!",
      "stars": 5
    },
    {
      "spotId": 6,
      "userId": 11,
      "review": "Host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 6,
      "userId": 19,
      "review": "Enjoyed the amenities and pool.",
      "stars": 4
    },
    {
      "spotId": 6,
      "userId": 26,
      "review": "Comfortable beds and clean rooms.",
      "stars": 5
    },
    {
      "spotId": 6,
      "userId": 34,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 7,
      "userId": 4,
      "review": "Awesome spot! Beautiful view.",
      "stars": 5
    },
    {
      "spotId": 7,
      "userId": 13,
      "review": "Had a relaxing time. Great host!",
      "stars": 4
    },
    {
      "spotId": 7,
      "userId": 21,
      "review": "Clean and cozy place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 7,
      "userId": 29,
      "review": "Good location and value.",
      "stars": 3
    },
    {
      "spotId": 7,
      "userId": 35,
      "review": "Would definitely recommend.",
      "stars": 5
    },
    {
      "spotId": 8,
      "userId": 6,
      "review": "Amazing stay! Friendly host.",
      "stars": 5
    },
    {
      "spotId": 8,
      "userId": 14,
      "review": "The place was perfect for a family trip.",
      "stars": 5
    },
    {
      "spotId": 8,
      "userId": 22,
      "review": "Spacious rooms and beautiful decor.",
      "stars": 4
    },
    {
      "spotId": 8,
      "userId": 30,
      "review": "Quiet and peaceful surroundings.",
      "stars": 4
    },
    {
      "spotId": 8,
      "userId": 2,
      "review": "Loved the pool and amenities.",
      "stars": 5
    },
    {
      "spotId": 9,
      "userId": 3,
      "review": "Great spot! Amazing view.",
      "stars": 5
    },
    {
      "spotId": 9,
      "userId": 12,
      "review": "Had a wonderful time. Highly recommend!",
      "stars": 5
    },
    {
      "spotId": 9,
      "userId": 21,
      "review": "Clean and comfortable place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 9,
      "userId": 28,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 9,
      "userId": 35,
      "review": "Host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 10,
      "userId": 5,
      "review": "Beautiful location with great amenities.",
      "stars": 5
    },
    {
      "spotId": 10,
      "userId": 13,
      "review": "The perfect getaway spot!",
      "stars": 5
    },
    {
      "spotId": 10,
      "userId": 22,
      "review": "Enjoyed the pool and surroundings.",
      "stars": 4
    },
    {
      "spotId": 10,
      "userId": 30,
      "review": "Clean and well-maintained property.",
      "stars": 4
    },
    {
      "spotId": 10,
      "userId": 1,
      "review": "Had a great time with family.",
      "stars": 5
    },
    {
      "spotId": 11,
      "userId": 1,
      "review": "Amazing spot! Beautiful view.",
      "stars": 5
    },
    {
      "spotId": 11,
      "userId": 9,
      "review": "Had a relaxing time. Great host!",
      "stars": 4
    },
    {
      "spotId": 11,
      "userId": 17,
      "review": "Clean and cozy place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 11,
      "userId": 24,
      "review": "Good location and value.",
      "stars": 3
    },
    {
      "spotId": 11,
      "userId": 31,
      "review": "Would definitely recommend.",
      "stars": 5
    },
    {
      "spotId": 12,
      "userId": 2,
      "review": "Awesome stay! Friendly host.",
      "stars": 5
    },
    {
      "spotId": 12,
      "userId": 10,
      "review": "The place was perfect for a family trip.",
      "stars": 5
    },
    {
      "spotId": 12,
      "userId": 18,
      "review": "Spacious rooms and beautiful decor.",
      "stars": 4
    },
    {
      "spotId": 12,
      "userId": 25,
      "review": "Quiet and peaceful surroundings.",
      "stars": 4
    },
    {
      "spotId": 12,
      "userId": 32,
      "review": "Loved the pool and amenities.",
      "stars": 5
    },
    {
      "spotId": 13,
      "userId": 2,
      "review": "Great spot! Amazing view.",
      "stars": 5
    },
    {
      "spotId": 13,
      "userId": 9,
      "review": "Had a wonderful time. Highly recommend!",
      "stars": 5
    },
    {
      "spotId": 13,
      "userId": 16,
      "review": "Clean and comfortable place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 13,
      "userId": 23,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 13,
      "userId": 30,
      "review": "Host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 14,
      "userId": 4,
      "review": "Beautiful location with great amenities.",
      "stars": 5
    },
    {
      "spotId": 14,
      "userId": 11,
      "review": "The perfect getaway spot!",
      "stars": 5
    },
    {
      "spotId": 14,
      "userId": 18,
      "review": "Enjoyed the pool and surroundings.",
      "stars": 4
    },
    {
      "spotId": 14,
      "userId": 26,
      "review": "Clean and well-maintained property.",
      "stars": 4
    },
    {
      "spotId": 14,
      "userId": 34,
      "review": "Had a great time with family.",
      "stars": 5
    },
    {
      "spotId": 15,
      "userId": 2,
      "review": "Great spot! Amazing view.",
      "stars": 5
    },
    {
      "spotId": 15,
      "userId": 9,
      "review": "Had a wonderful time. Highly recommend!",
      "stars": 5
    },
    {
      "spotId": 15,
      "userId": 16,
      "review": "Clean and comfortable place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 15,
      "userId": 23,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 15,
      "userId": 30,
      "review": "Host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 16,
      "userId": 4,
      "review": "Beautiful location with great amenities.",
      "stars": 5
    },
    {
      "spotId": 16,
      "userId": 11,
      "review": "The perfect getaway spot!",
      "stars": 5
    },
    {
      "spotId": 16,
      "userId": 18,
      "review": "Enjoyed the pool and surroundings.",
      "stars": 4
    },
    {
      "spotId": 16,
      "userId": 26,
      "review": "Clean and well-maintained property.",
      "stars": 4
    },
    {
      "spotId": 16,
      "userId": 34,
      "review": "Had a great time with family.",
      "stars": 5
    },
    {
      "spotId": 17,
      "userId": 1,
      "review": "Great spot! Amazing view.",
      "stars": 5
    },
    {
      "spotId": 17,
      "userId": 9,
      "review": "Had a wonderful time. Highly recommend!",
      "stars": 5
    },
    {
      "spotId": 17,
      "userId": 16,
      "review": "Clean and comfortable place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 17,
      "userId": 23,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 17,
      "userId": 30,
      "review": "Host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 18,
      "userId": 2,
      "review": "Beautiful location with great amenities.",
      "stars": 5
    },
    {
      "spotId": 18,
      "userId": 11,
      "review": "The perfect getaway spot!",
      "stars": 5
    },
    {
      "spotId": 18,
      "userId": 18,
      "review": "Enjoyed the pool and surroundings.",
      "stars": 4
    },
    {
      "spotId": 18,
      "userId": 26,
      "review": "Clean and well-maintained property.",
      "stars": 4
    },
    {
      "spotId": 18,
      "userId": 34,
      "review": "Had a great time with family.",
      "stars": 5
    },
    {
      "spotId": 19,
      "userId": 1,
      "review": "Great spot! Amazing view.",
      "stars": 5
    },
    {
      "spotId": 19,
      "userId": 9,
      "review": "Had a wonderful time. Highly recommend!",
      "stars": 5
    },
    {
      "spotId": 19,
      "userId": 16,
      "review": "Clean and comfortable place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 19,
      "userId": 23,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 19,
      "userId": 30,
      "review": "Host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 20,
      "userId": 2,
      "review": "Beautiful location with great amenities.",
      "stars": 5
    },
    {
      "spotId": 20,
      "userId": 11,
      "review": "The perfect getaway spot!",
      "stars": 5
    },
    {
      "spotId": 20,
      "userId": 18,
      "review": "Enjoyed the pool and surroundings.",
      "stars": 4
    },
    {
      "spotId": 20,
      "userId": 26,
      "review": "Clean and well-maintained property.",
      "stars": 4
    },
    {
      "spotId": 20,
      "userId": 34,
      "review": "Had a great time with family.",
      "stars": 5
    },
    {
      "spotId": 21,
      "userId": 1,
      "review": "Great spot! Amazing view.",
      "stars": 5
    },
    {
      "spotId": 21,
      "userId": 9,
      "review": "Had a wonderful time. Highly recommend!",
      "stars": 5
    },
    {
      "spotId": 21,
      "userId": 16,
      "review": "Clean and comfortable place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 21,
      "userId": 23,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 21,
      "userId": 30,
      "review": "Host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 22,
      "userId": 2,
      "review": "Beautiful location with great amenities.",
      "stars": 5
    },
    {
      "spotId": 22,
      "userId": 11,
      "review": "The perfect getaway spot!",
      "stars": 5
    },
    {
      "spotId": 22,
      "userId": 18,
      "review": "Enjoyed the pool and surroundings.",
      "stars": 4
    },
    {
      "spotId": 22,
      "userId": 26,
      "review": "Clean and well-maintained property.",
      "stars": 4
    },
    {
      "spotId": 22,
      "userId": 34,
      "review": "Had a great time with family.",
      "stars": 5
    },
    {
      "spotId": 23,
      "userId": 1,
      "review": "Great spot! Amazing view.",
      "stars": 5
    },
    {
      "spotId": 23,
      "userId": 9,
      "review": "Had a wonderful time. Highly recommend!",
      "stars": 5
    },
    {
      "spotId": 23,
      "userId": 16,
      "review": "Clean and comfortable place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 23,
      "userId": 23,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 23,
      "userId": 30,
      "review": "Host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 24,
      "userId": 2,
      "review": "Beautiful location with great amenities.",
      "stars": 5
    },
    {
      "spotId": 24,
      "userId": 11,
      "review": "The perfect getaway spot!",
      "stars": 5
    },
    {
      "spotId": 24,
      "userId": 18,
      "review": "Enjoyed the pool and surroundings.",
      "stars": 4
    },
    {
      "spotId": 24,
      "userId": 26,
      "review": "Clean and well-maintained property.",
      "stars": 4
    },
    {
      "spotId": 24,
      "userId": 34,
      "review": "Had a great time with family.",
      "stars": 5
    },
    {
      "spotId": 25,
      "userId": 1,
      "review": "Great spot! Amazing view.",
      "stars": 5
    },
    {
      "spotId": 25,
      "userId": 9,
      "review": "Had a wonderful time. Highly recommend!",
      "stars": 5
    },
    {
      "spotId": 25,
      "userId": 16,
      "review": "Clean and comfortable place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 25,
      "userId": 23,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 25,
      "userId": 30,
      "review": "Host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 26,
      "userId": 2,
      "review": "Beautiful location with great amenities.",
      "stars": 5
    },
    {
      "spotId": 26,
      "userId": 11,
      "review": "The perfect getaway spot!",
      "stars": 5
    },
    {
      "spotId": 26,
      "userId": 18,
      "review": "Enjoyed the pool and surroundings.",
      "stars": 4
    },
    {
      "spotId": 26,
      "userId": 26,
      "review": "Clean and well-maintained property.",
      "stars": 4
    },
    {
      "spotId": 26,
      "userId": 34,
      "review": "Had a great time with family.",
      "stars": 5
    },
    {
      "spotId": 27,
      "userId": 1,
      "review": "Great spot! Amazing view.",
      "stars": 5
    },
    {
      "spotId": 27,
      "userId": 9,
      "review": "Had a wonderful time. Highly recommend!",
      "stars": 5
    },
    {
      "spotId": 27,
      "userId": 16,
      "review": "Clean and comfortable place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 27,
      "userId": 23,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 27,
      "userId": 30,
      "review": "Host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 28,
      "userId": 2,
      "review": "Beautiful location with great amenities.",
      "stars": 5
    },
    {
      "spotId": 28,
      "userId": 11,
      "review": "The perfect getaway spot!",
      "stars": 5
    },
    {
      "spotId": 28,
      "userId": 18,
      "review": "Enjoyed the pool and surroundings.",
      "stars": 4
    },
    {
      "spotId": 28,
      "userId": 26,
      "review": "Clean and well-maintained property.",
      "stars": 4
    },
    {
      "spotId": 28,
      "userId": 34,
      "review": "Had a great time with family.",
      "stars": 5
    },
    {
      "spotId": 29,
      "userId": 1,
      "review": "Great spot! Amazing view.",
      "stars": 5
    },
    {
      "spotId": 29,
      "userId": 9,
      "review": "Had a wonderful time. Highly recommend!",
      "stars": 5
    },
    {
      "spotId": 29,
      "userId": 16,
      "review": "Clean and comfortable place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 29,
      "userId": 23,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 29,
      "userId": 30,
      "review": "Host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 30,
      "userId": 2,
      "review": "Beautiful location with great amenities.",
      "stars": 5
    },
    {
      "spotId": 30,
      "userId": 11,
      "review": "The perfect getaway spot!",
      "stars": 5
    },
    {
      "spotId": 30,
      "userId": 18,
      "review": "Enjoyed the pool and surroundings.",
      "stars": 4
    },
    {
      "spotId": 30,
      "userId": 26,
      "review": "Clean and well-maintained property.",
      "stars": 4
    },
    {
      "spotId": 30,
      "userId": 34,
      "review": "Had a great time with family.",
      "stars": 5
    },
    {
      "spotId": 31,
      "userId": 1,
      "review": "Great spot! Amazing view.",
      "stars": 5
    },
    {
      "spotId": 31,
      "userId": 9,
      "review": "Had a wonderful time. Highly recommend!",
      "stars": 5
    },
    {
      "spotId": 31,
      "userId": 16,
      "review": "Clean and comfortable place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 31,
      "userId": 23,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 31,
      "userId": 30,
      "review": "Host was very accommodating.",
      "stars": 4
    },
    {
      "spotId": 32,
      "userId": 2,
      "review": "Beautiful location with great amenities.",
      "stars": 5
    },
    {
      "spotId": 32,
      "userId": 11,
      "review": "The perfect getaway spot!",
      "stars": 5
    },
    {
      "spotId": 32,
      "userId": 18,
      "review": "Enjoyed the pool and surroundings.",
      "stars": 4
    },
    {
      "spotId": 32,
      "userId": 26,
      "review": "Clean and well-maintained property.",
      "stars": 4
    },
    {
      "spotId": 32,
      "userId": 34,
      "review": "Had a great time with family.",
      "stars": 5
    },
    {
      "spotId": 32,
      "userId": 1,
      "review": "Great spot! Amazing view.",
      "stars": 5
    },
    {
      "spotId": 32,
      "userId": 9,
      "review": "Had a wonderful time. Highly recommend!",
      "stars": 5
    },
    {
      "spotId": 32,
      "userId": 16,
      "review": "Clean and comfortable place. Loved it!",
      "stars": 4
    },
    {
      "spotId": 32,
      "userId": 23,
      "review": "Good value for money.",
      "stars": 3
    },
    {
      "spotId": 32,
      "userId": 30,
      "review": "Host was very accommodating.",
      "stars": 4
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
