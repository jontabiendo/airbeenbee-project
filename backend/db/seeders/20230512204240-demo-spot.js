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
        },
        {
          address: '123 Jefferson St',
          city: 'Miami',
          state: 'Florida',
          country: 'USA',
          lat: 100.123456,
          lng: -56.78945613,
          name: 'Ralph Lauren House',
          description: 'Large mansion located in the heart of Miami. Enjoy the best Miami has to offer and more!',
          price: 1000.00,
          ownerId: 1
        },
          {
            "address": "123 Main Street",
            "city": "New York",
            "state": "NY",
            "country": "USA",
            "lat": 40.7128,
            "lng": -74.0060,
            "name": "Cozy Studio in Manhattan",
            "description": "A comfortable studio apartment in the heart of Manhattan.",
            "price": 100,
            "ownerId": 1
          },
          {
            "address": "456 Elm Avenue",
            "city": "Los Angeles",
            "state": "CA",
            "country": "USA",
            "lat": 34.0522,
            "lng": -118.2437,
            "name": "Modern Loft in Downtown LA",
            "description": "A stylish loft with stunning views of the city.",
            "price": 150,
            "ownerId": 2
          },
          {
            "address": "789 Oak Street",
            "city": "Chicago",
            "state": "IL",
            "country": "USA",
            "lat": 41.8781,
            "lng": -87.6298,
            "name": "Charming Townhouse in Chicago",
            "description": "A lovely townhouse in a quiet neighborhood.",
            "price": 120,
            "ownerId": 3
          },
          {
            "address": "101 Pine Road",
            "city": "San Francisco",
            "state": "CA",
            "country": "USA",
            "lat": 37.7749,
            "lng": -122.4194,
            "name": "Luxury Penthouse with Bay Views",
            "description": "A luxurious penthouse with breathtaking views of the bay.",
            "price": 300,
            "ownerId": 1
          },
          {
            "address": "202 Maple Lane",
            "city": "Miami",
            "state": "FL",
            "country": "USA",
            "lat": 25.7617,
            "lng": -80.1918,
            "name": "Beachfront Condo in Miami",
            "description": "A beautiful condo steps away from the sandy beach.",
            "price": 200,
            "ownerId": 2
          },
          {
            "address": "303 Birch Street",
            "city": "Seattle",
            "state": "WA",
            "country": "USA",
            "lat": 47.6062,
            "lng": -122.3321,
            "name": "Modern Apartment in Downtown Seattle",
            "description": "A modern apartment in the heart of the city.",
            "price": 180,
            "ownerId": 3
          },
          {
            "address": "404 Cedar Drive",
            "city": "Austin",
            "state": "TX",
            "country": "USA",
            "lat": 30.2672,
            "lng": -97.7431,
            "name": "Rustic Cabin Retreat in Austin",
            "description": "A cozy cabin surrounded by nature and tranquility.",
            "price": 120,
            "ownerId": 1
          },
          {
            "address": "505 Walnut Avenue",
            "city": "Denver",
            "state": "CO",
            "country": "USA",
            "lat": 39.7392,
            "lng": -104.9903,
            "name": "Ski Chalet in the Rockies",
            "description": "A charming chalet with easy access to ski resorts.",
            "price": 250,
            "ownerId": 2
          },
          {
            "address": "606 Pine Lane",
            "city": "Nashville",
            "state": "TN",
            "country": "USA",
            "lat": 36.1627,
            "lng": -86.7816,
            "name": "Music City Loft",
            "description": "A trendy loft in the heart of Nashville's music scene.",
            "price": 140,
            "ownerId": 3
          },
          {
            "address": "707 Oak Road",
            "city": "New Orleans",
            "state": "LA",
            "country": "USA",
            "lat": 29.9511,
            "lng": -90.0715,
            "name": "Historic Creole Cottage",
            "description": "A charming cottage in the historic French Quarter.",
            "price": 180,
            "ownerId": 1
          },
          {
            "address": "808 Elm Street",
            "city": "Boston",
            "state": "MA",
            "country": "USA",
            "lat": 42.3601,
            "lng": -71.0589,
            "name": "Central Boston Brownstone",
            "description": "A classic brownstone in the heart of Boston.",
            "price": 280,
            "ownerId": 2
          },
          {
            "address": "909 Maple Avenue",
            "city": "San Diego",
            "state": "CA",
            "country": "USA",
            "lat": 32.7157,
            "lng": -117.1611,
            "name": "Beach House by the Sea",
            "description": "A beachfront house with stunning ocean views.",
            "price": 320,
            "ownerId": 3
          },
          {
            "address": "1010 Pine Road",
            "city": "Portland",
            "state": "OR",
            "country": "USA",
            "lat": 45.5122,
            "lng": -122.6587,
            "name": "Chic Loft in Hipster District",
            "description": "A trendy loft in the vibrant neighborhood of Portland.",
            "price": 150,
            "ownerId": 1
          },
          {
            "address": "1111 Cedar Lane",
            "city": "Las Vegas",
            "state": "NV",
            "country": "USA",
            "lat": 36.1699,
            "lng": -115.1398,
            "name": "Luxury Villa on the Strip",
            "description": "A luxurious villa with views of the iconic Las Vegas Strip.",
            "price": 400,
            "ownerId": 2
          },
          {
            "address": "1212 Walnut Avenue",
            "city": "Honolulu",
            "state": "HI",
            "country": "USA",
            "lat": 21.3069,
            "lng": -157.8583,
            "name": "Tropical Paradise Bungalow",
            "description": "A serene bungalow surrounded by lush tropical gardens.",
            "price": 280,
            "ownerId": 3
          },
          {
            "address": "1313 Birch Street",
            "city": "London",
            "state": "ENG",
            "country": "UK",
            "lat": 51.5074,
            "lng": -0.1278,
            "name": "Elegant Flat in Central London",
            "description": "A stylish flat in the heart of London's cultural district.",
            "price": 320,
            "ownerId": 1
          },
          {
            "address": "1414 Cedar Drive",
            "city": "Paris",
            "state": "ÎDF",
            "country": "France",
            "lat": 48.8566,
            "lng": 2.3522,
            "name": "Charming Parisian Apartment",
            "description": "A cozy apartment in the romantic city of Paris.",
            "price": 280,
            "ownerId": 2
          },
          {
            "address": "1515 Pine Lane",
            "city": "Rome",
            "state": "Lazio",
            "country": "Italy",
            "lat": 41.9028,
            "lng": 12.4964,
            "name": "Historic Villa near Colosseum",
            "description": "A historic villa with views of the iconic Colosseum.",
            "price": 350,
            "ownerId": 3
          },
          {
            "address": "1616 Elm Avenue",
            "city": "Sydney",
            "state": "NSW",
            "country": "Australia",
            "lat": -33.8688,
            "lng": 151.2093,
            "name": "Modern Apartment with Harbour Views",
            "description": "A modern apartment with stunning views of Sydney Harbour.",
            "price": 400,
            "ownerId": 1
          },
          {
            "address": "1717 Oak Road",
            "city": "Tokyo",
            "state": "Tokyo",
            "country": "Japan",
            "lat": 35.6895,
            "lng": 139.6917,
            "name": "Traditional Ryokan in Tokyo",
            "description": "Experience traditional Japanese hospitality in a ryokan.",
            "price": 280,
            "ownerId": 2
          },
          {
            "address": "1818 Walnut Avenue",
            "city": "Cape Town",
            "state": "WC",
            "country": "South Africa",
            "lat": -33.9249,
            "lng": 18.4241,
            "name": "Spectacular Villa in Cape Town",
            "description": "A spectacular villa with views of Table Mountain.",
            "price": 500,
            "ownerId": 3
          },
          {
            "address": "1919 Cedar Lane",
            "city": "Rio de Janeiro",
            "state": "RJ",
            "country": "Brazil",
            "lat": -22.9068,
            "lng": -43.1729,
            "name": "Beach House in Copacabana",
            "description": "A beach house just steps away from Copacabana Beach.",
            "price": 320,
            "ownerId": 1
          },
          {
            "address": "2020 Pine Lane",
            "city": "Amsterdam",
            "state": "NH",
            "country": "Netherlands",
            "lat": 52.3676,
            "lng": 4.9041,
            "name": "Canal View Apartment",
            "description": "An apartment with picturesque views of Amsterdam's canals.",
            "price": 280,
            "ownerId": 2
          },
          {
            "address": "2121 Birch Street",
            "city": "Berlin",
            "state": "Berlin",
            "country": "Germany",
            "lat": 52.5200,
            "lng": 13.4050,
            "name": "Contemporary Loft in Berlin",
            "description": "A contemporary loft in the trendy city of Berlin.",
            "price": 320,
            "ownerId": 3
          },
          {
            "address": "2222 Cedar Drive",
            "city": "Barcelona",
            "state": "CT",
            "country": "Spain",
            "lat": 41.3851,
            "lng": 2.1734,
            "name": "Sunny Beachfront Villa",
            "description": "A sunny villa with direct access to the beach.",
            "price": 350,
            "ownerId": 1
          },
          {
            "address": "2323 Walnut Avenue",
            "city": "Vienna",
            "state": "Vienna",
            "country": "Austria",
            "lat": 48.2082,
            "lng": 16.3738,
            "name": "Historic Palace in Vienna",
            "description": "Experience the grandeur of a historic palace in Vienna.",
            "price": 500,
            "ownerId": 2
          },
          {
            "address": "2424 Pine Road",
            "city": "Stockholm",
            "state": "Stockholm",
            "country": "Sweden",
            "lat": 59.3293,
            "lng": 18.0686,
            "name": "Scandinavian Design Apartment",
            "description": "An apartment showcasing elegant Scandinavian design.",
            "price": 280,
            "ownerId": 3
          },
          {
            "address": "2525 Elm Street",
            "city": "Dubai",
            "state": "Dubai",
            "country": "UAE",
            "lat": 25.276987,
            "lng": 55.296249,
            "name": "Luxury Skyscraper Penthouse",
            "description": "A luxurious penthouse in a Dubai skyscraper.",
            "price": 600,
            "ownerId": 1
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
