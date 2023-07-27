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
      preview: false
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
    },
    {
      spotId: 5,
      url: 'https://i.guim.co.uk/img/media/b3585cf7b5525c4f27b924754ed98b3b7fbdaf53/0_383_8048_4831/master/8048.jpg',
      preview: true
    },
    {
      spotId: 5,
      url: 'https://i.guim.co.uk/img/media/b3585cf7b5525c4f27b924754ed98b3b7fbdaf53/0_383_8048_4831/master/8048.jpg',
      preview: false
    },
    {
      spotId: 5,
      url: 'https://i.guim.co.uk/img/media/b3585cf7b5525c4f27b924754ed98b3b7fbdaf53/0_383_8048_4831/master/8048.jpg',
      preview: false
    },
    {
      spotId: 5,
      url: 'https://i.guim.co.uk/img/media/b3585cf7b5525c4f27b924754ed98b3b7fbdaf53/0_383_8048_4831/master/8048.jpg',
      preview: false
    },
    {
      spotId: 5,
      url: 'https://i.guim.co.uk/img/media/b3585cf7b5525c4f27b924754ed98b3b7fbdaf53/0_383_8048_4831/master/8048.jpg',
      preview: false
    },
    {
      spotId: 6,
      url: 'https://lacounty.gov/wp-content/uploads/2022/03/shutterstock_1418018357-scaled.jpg',
      preview: true
    },
    {
      spotId: 6,
      url: 'https://lacounty.gov/wp-content/uploads/2022/03/shutterstock_1418018357-scaled.jpg',
      preview: false
    },
    {
      spotId: 6,
      url: 'https://lacounty.gov/wp-content/uploads/2022/03/shutterstock_1418018357-scaled.jpg',
      preview: false
    },
    {
      spotId: 6,
      url: 'https://lacounty.gov/wp-content/uploads/2022/03/shutterstock_1418018357-scaled.jpg',
      preview: false
    },
    {
      spotId: 6,
      url: 'https://lacounty.gov/wp-content/uploads/2022/03/shutterstock_1418018357-scaled.jpg',
      preview: false
    },
    {
      spotId: 7,
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/df/63/ed/caption.jpg',
      preview: true
    },
    {
      spotId: 7,
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/df/63/ed/caption.jpg',
      preview: false
    },
    {
      spotId: 7,
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/df/63/ed/caption.jpg',
      preview: false
    },
    {
      spotId: 7,
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/df/63/ed/caption.jpg',
      preview: false
    },
    {
      spotId: 7,
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/df/63/ed/caption.jpg',
      preview: false
    },
    {
      spotId: 8,
      url: 'https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg',
      preview: true
    },
    {
      spotId: 8,
      url: 'https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg',
      preview: false
    },
    {
      spotId: 8,
      url: 'https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg',
      preview: false
    },
    {
      spotId: 8,
      url: 'https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg',
      preview: false
    },
    {
      spotId: 8,
      url: 'https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg',
      preview: false
    },
    {
      spotId: 9,
      url: 'https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/10/Sunrise-at-Miami_Credit_GettyImages-168157950.jpg',
      preview: true
    },
    {
      spotId: 9,
      url: 'https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/10/Sunrise-at-Miami_Credit_GettyImages-168157950.jpg',
      preview: false
    },
    {
      spotId: 9,
      url: 'https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/10/Sunrise-at-Miami_Credit_GettyImages-168157950.jpg',
      preview: false
    },
    {
      spotId: 9,
      url: 'https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/10/Sunrise-at-Miami_Credit_GettyImages-168157950.jpg',
      preview: false
    },
    {
      spotId: 9,
      url: 'https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/10/Sunrise-at-Miami_Credit_GettyImages-168157950.jpg',
      preview: false
    },
    {
      spotId: 10,
      url: 'https://en.wikipedia.org/wiki/Seattle#/media/File:Seattle_Center_as_night_falls.jpg',
      preview: true
    },
    {
      spotId: 10,
      url: 'https://en.wikipedia.org/wiki/Seattle#/media/File:Seattle_Center_as_night_falls.jpg',
      preview: false
    },
    {
      spotId: 10,
      url: 'https://en.wikipedia.org/wiki/Seattle#/media/File:Seattle_Center_as_night_falls.jpg',
      preview: false
    },
    {
      spotId: 10,
      url: 'https://en.wikipedia.org/wiki/Seattle#/media/File:Seattle_Center_as_night_falls.jpg',
      preview: false
    },
    {
      spotId: 10,
      url: 'https://en.wikipedia.org/wiki/Seattle#/media/File:Seattle_Center_as_night_falls.jpg',
      preview: false
    },
    {
      spotId: 11,
      url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/austin/austin2_copy_1__211bcd0d-a354-4c0f-8203-107ad7774905.jpg',
      preview: true
    },
    {
      spotId: 11,
      url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/austin/austin2_copy_1__211bcd0d-a354-4c0f-8203-107ad7774905.jpg',
      preview: false
    },
    {
      spotId: 11,
      url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/austin/austin2_copy_1__211bcd0d-a354-4c0f-8203-107ad7774905.jpg',
      preview: false
    },
    {
      spotId: 11,
      url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/austin/austin2_copy_1__211bcd0d-a354-4c0f-8203-107ad7774905.jpg',
      preview: false
    },
    {
      spotId: 11,
      url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/austin/austin2_copy_1__211bcd0d-a354-4c0f-8203-107ad7774905.jpg',
      preview: false
    },
    {
      spotId: 12,
      url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_600,q_65,w_640/v1/clients/denver/Hero_Homepage_05_23_c71bf554-a669-45df-b00c-cde1269b3ea3.jpg',
      preview: true
    },
    {
      spotId: 12,
      url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_600,q_65,w_640/v1/clients/denver/Hero_Homepage_05_23_c71bf554-a669-45df-b00c-cde1269b3ea3.jpg',
      preview: false
    },
    {
      spotId: 12,
      url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_600,q_65,w_640/v1/clients/denver/Hero_Homepage_05_23_c71bf554-a669-45df-b00c-cde1269b3ea3.jpg',
      preview: false
    },
    {
      spotId: 12,
      url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_600,q_65,w_640/v1/clients/denver/Hero_Homepage_05_23_c71bf554-a669-45df-b00c-cde1269b3ea3.jpg',
      preview: false
    },
    {
      spotId: 12,
      url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_600,q_65,w_640/v1/clients/denver/Hero_Homepage_05_23_c71bf554-a669-45df-b00c-cde1269b3ea3.jpg',
      preview: false
    },
    {
      spotId: 13,
      url: 'https://www.treksplorer.com/wp-content/uploads/downtown-nashville-1.jpg',
      preview: true
    },
    {
      spotId: 13,
      url: 'https://www.treksplorer.com/wp-content/uploads/downtown-nashville-1.jpg',
      preview: false
    },
    {
      spotId: 13,
      url: 'https://www.treksplorer.com/wp-content/uploads/downtown-nashville-1.jpg',
      preview: false
    },
    {
      spotId: 13,
      url: 'https://www.treksplorer.com/wp-content/uploads/downtown-nashville-1.jpg',
      preview: false
    },
    {
      spotId: 13,
      url: 'https://www.treksplorer.com/wp-content/uploads/downtown-nashville-1.jpg',
      preview: false
    },
    {
      spotId: 14,
      url: 'https://lp-cms-production.imgix.net/2021-10/The%20wrought%20iron%20lace%20of%20a%20French%20Quarter%20Balcony%20in%20New%20Orleans%20Peter%20Unger%20GettyImages-678716875%20rfe.jpg',
      preview: true
    },
    {
      spotId: 14,
      url: 'https://lp-cms-production.imgix.net/2021-10/The%20wrought%20iron%20lace%20of%20a%20French%20Quarter%20Balcony%20in%20New%20Orleans%20Peter%20Unger%20GettyImages-678716875%20rfe.jpg',
      preview: false
    },
    {
      spotId: 14,
      url: 'https://lp-cms-production.imgix.net/2021-10/The%20wrought%20iron%20lace%20of%20a%20French%20Quarter%20Balcony%20in%20New%20Orleans%20Peter%20Unger%20GettyImages-678716875%20rfe.jpg',
      preview: false
    },
    {
      spotId: 14,
      url: 'https://lp-cms-production.imgix.net/2021-10/The%20wrought%20iron%20lace%20of%20a%20French%20Quarter%20Balcony%20in%20New%20Orleans%20Peter%20Unger%20GettyImages-678716875%20rfe.jpg',
      preview: false
    },
    {
      spotId: 14,
      url: 'https://lp-cms-production.imgix.net/2021-10/The%20wrought%20iron%20lace%20of%20a%20French%20Quarter%20Balcony%20in%20New%20Orleans%20Peter%20Unger%20GettyImages-678716875%20rfe.jpg',
      preview: false
    },
    {
      spotId: 15,
      url: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/531000/531835-boston.jpg',
      preview: true
    },
    {
      spotId: 15,
      url: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/531000/531835-boston.jpg',
      preview: false
    },
    {
      spotId: 15,
      url: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/531000/531835-boston.jpg',
      preview: false
    },
    {
      spotId: 15,
      url: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/531000/531835-boston.jpg',
      preview: false
    },
    {
      spotId: 15,
      url: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/531000/531835-boston.jpg',
      preview: false
    },
    {
      spotId: 16,
      url: 'https://www.tripsavvy.com/thmb/N-x2D3GHrDriLXo8QK8p0m99p2I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sunset-at-la-jolla-cove-1278353139-583584d99afb438a9889e8d381b836ed.jpg',
      preview: true
    },
    {
      spotId: 16,
      url: 'https://www.tripsavvy.com/thmb/N-x2D3GHrDriLXo8QK8p0m99p2I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sunset-at-la-jolla-cove-1278353139-583584d99afb438a9889e8d381b836ed.jpg',
      preview: false
    },
    {
      spotId: 16,
      url: 'https://www.tripsavvy.com/thmb/N-x2D3GHrDriLXo8QK8p0m99p2I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sunset-at-la-jolla-cove-1278353139-583584d99afb438a9889e8d381b836ed.jpg',
      preview: false
    },
    {
      spotId: 16,
      url: 'https://www.tripsavvy.com/thmb/N-x2D3GHrDriLXo8QK8p0m99p2I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sunset-at-la-jolla-cove-1278353139-583584d99afb438a9889e8d381b836ed.jpg',
      preview: false
    },
    {
      spotId: 16,
      url: 'https://www.tripsavvy.com/thmb/N-x2D3GHrDriLXo8QK8p0m99p2I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sunset-at-la-jolla-cove-1278353139-583584d99afb438a9889e8d381b836ed.jpg',
      preview: false
    },
    {
      spotId: 17,
      url: 'https://portlandmaine.com/wp-content/uploads/2022/02/Outdoor-dining-1.jpeg',
      preview: true
    },
    {
      spotId: 17,
      url: 'https://portlandmaine.com/wp-content/uploads/2022/02/Outdoor-dining-1.jpeg',
      preview: false
    },
    {
      spotId: 17,
      url: 'https://portlandmaine.com/wp-content/uploads/2022/02/Outdoor-dining-1.jpeg',
      preview: false
    },
    {
      spotId: 17,
      url: 'https://portlandmaine.com/wp-content/uploads/2022/02/Outdoor-dining-1.jpeg',
      preview: false
    },
    {
      spotId: 17,
      url: 'https://portlandmaine.com/wp-content/uploads/2022/02/Outdoor-dining-1.jpeg',
      preview: false
    },
    {
      spotId: 18,
      url: 'https://vegasexperience.com/wp-content/uploads/2023/01/Photo-of-Las-Vegas-Downtown-768x512.jpg',
      preview: true
    },
    {
      spotId: 18,
      url: 'https://vegasexperience.com/wp-content/uploads/2023/01/Photo-of-Las-Vegas-Downtown-768x512.jpg',
      preview: false
    },
    {
      spotId: 18,
      url: 'https://vegasexperience.com/wp-content/uploads/2023/01/Photo-of-Las-Vegas-Downtown-768x512.jpg',
      preview: false
    },
    {
      spotId: 18,
      url: 'https://vegasexperience.com/wp-content/uploads/2023/01/Photo-of-Las-Vegas-Downtown-768x512.jpg',
      preview: false
    },
    {
      spotId: 18,
      url: 'https://vegasexperience.com/wp-content/uploads/2023/01/Photo-of-Las-Vegas-Downtown-768x512.jpg',
      preview: false
    },
    {
      spotId: 19,
      url: 'https://a.cdn-hotels.com/gdcs/production121/d137/d4030d17-700f-4fd1-9c05-4b1742c7a6c3.jpg',
      preview: true
    },
    {
      spotId: 19,
      url: 'https://a.cdn-hotels.com/gdcs/production121/d137/d4030d17-700f-4fd1-9c05-4b1742c7a6c3.jpg',
      preview: false
    },
    {
      spotId: 19,
      url: 'https://a.cdn-hotels.com/gdcs/production121/d137/d4030d17-700f-4fd1-9c05-4b1742c7a6c3.jpg',
      preview: false
    },
    {
      spotId: 19,
      url: 'https://a.cdn-hotels.com/gdcs/production121/d137/d4030d17-700f-4fd1-9c05-4b1742c7a6c3.jpg',
      preview: false
    },
    {
      spotId: 19,
      url: 'https://a.cdn-hotels.com/gdcs/production121/d137/d4030d17-700f-4fd1-9c05-4b1742c7a6c3.jpg',
      preview: false
    },
    {
      spotId: 20,
      url: 'https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg',
      preview: true
    },
    {
      spotId: 20,
      url: 'https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg',
      preview: false
    },
    {
      spotId: 20,
      url: 'https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg',
      preview: false
    },
    {
      spotId: 20,
      url: 'https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg',
      preview: false
    },
    {
      spotId: 20,
      url: 'https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg',
      preview: false
    },
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
