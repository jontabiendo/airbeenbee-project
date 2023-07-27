'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs');

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
   options.tableName = 'Users';

   await queryInterface.bulkInsert(options, [
    {
      firstName: 'Jonathan',
      lastName: 'Tabiendo',
      username: 'JonTabiendo',
      email: 'jontabiendo@gmail.com',
      hashedPassword: bcrypt.hashSync('Habidosa')
    },
    {
      firstName: 'Samuel',
      lastName: 'Tabiendo',
      username: 'IAmATrex',
      email: 'destruction_beetle@hotmail.com',
      hashedPassword: bcrypt.hashSync('CryptoMain#1')
    },
    {
      firstName: 'David',
      lastName: 'Tabiendo',
      username: 'DatTabiendo',
      email: 'blueBeetle@yahoo.com',
      hashedPassword: bcrypt.hashSync('blahblahblah')
    },
    {
      firstName: 'Demo',
      lastName: 'Lition',
      username: 'Demo-Lition',
      email: 'demo@user.io',
      hashedPassword: bcrypt.hashSync('password')
    },
    
      {
        "firstName": "John",
        "lastName": "Doe",
        "username": "johndoe123",
        "email": "john.doe@example.com",
        "hashedPassword": bcrypt.hashSync("P@ssw0rd1")
      },
      {
        "firstName": "Alice",
        "lastName": "Smith",
        "username": "alice_smith",
        "email": "alice.smith@example.com",
        "hashedPassword": bcrypt.hashSync("S3cr3tP@ss")
      },
      {
        "firstName": "Michael",
        "lastName": "Johnson",
        "username": "mjohnson34",
        "email": "michael.johnson@example.com",
        "hashedPassword": bcrypt.hashSync("M1k3J0hn$on")
      },
      {
        "firstName": "Emily",
        "lastName": "Williams",
        "username": "emilyw",
        "email": "emily.williams@example.com",
        "hashedPassword": bcrypt.hashSync("W1ll!@msEm")
      },
      {
        "firstName": "Daniel",
        "lastName": "Brown",
        "username": "dannyb123",
        "email": "daniel.brown@example.com",
        "hashedPassword": "Br0wnP@ss"
      },
      {
        "firstName": "Sophia",
        "lastName": "Jones",
        "username": "sophiaj",
        "email": "sophia.jones@example.com",
        "hashedPassword": bcrypt.hashSync("J0n3sS0ph!@")
      },
      {
        "firstName": "Matthew",
        "lastName": "Davis",
        "username": "matt_d",
        "email": "matthew.davis@example.com",
        "hashedPassword": bcrypt.hashSync("Dav!sM@tt")
      },
      {
        "firstName": "Olivia",
        "lastName": "Miller",
        "username": "olivia_m",
        "email": "olivia.miller@example.com",
        "hashedPassword": bcrypt.hashSync("M!ll3rOl!v1@")
      },
      {
        "firstName": "David",
        "lastName": "Wilson",
        "username": "dwilson87",
        "email": "david.wilson@example.com",
        "hashedPassword": bcrypt.hashSync("W!ls0nD@v1d")
      },
      {
        "firstName": "Emma",
        "lastName": "Taylor",
        "username": "emmat",
        "email": "emma.taylor@example.com",
        "hashedPassword": bcrypt.hashSync("T@yl0rEmm@")
      },
      {
        "firstName": "James",
        "lastName": "Anderson",
        "username": "j_anderson",
        "email": "james.anderson@example.com",
        "hashedPassword": bcrypt.hashSync("And3rs0nJ@m3s")
      },
      {
        "firstName": "Ava",
        "lastName": "Thomas",
        "username": "avath",
        "email": "ava.thomas@example.com",
        "hashedPassword": bcrypt.hashSync("Th0m@sAv@")
      },
      {
        "firstName": "Joseph",
        "lastName": "Jackson",
        "username": "joe_jackson",
        "email": "joseph.jackson@example.com",
        "hashedPassword": bcrypt.hashSync("J@cksonJ0e")
      },
      {
        "firstName": "Mia",
        "lastName": "White",
        "username": "miawhite",
        "email": "mia.white@example.com",
        "hashedPassword": bcrypt.hashSync("Wh!teM!a")
      },
      {
        "firstName": "William",
        "lastName": "Harris",
        "username": "will_h",
        "email": "william.harris@example.com",
        "hashedPassword": bcrypt.hashSync("H@rrisW!ll")
      },
      {
        "firstName": "Isabella",
        "lastName": "Martin",
        "username": "isabella_m",
        "email": "isabella.martin@example.com",
        "hashedPassword": bcrypt.hashSync("M@rtin1s@b3lla")
      },
      {
        "firstName": "Ethan",
        "lastName": "Thompson",
        "username": "ethant123",
        "email": "ethan.thompson@example.com",
        "hashedPassword": bcrypt.hashSync("Th0mps0n3th@n")
      },
      {
        "firstName": "Sofia",
        "lastName": "Garcia",
        "username": "sofiag",
        "email": "sofia.garcia@example.com",
        "hashedPassword": bcrypt.hashSync("G@rc!aS0f1@")
      },
      {
        "firstName": "Benjamin",
        "lastName": "Martinez",
        "username": "ben_martinez",
        "email": "benjamin.martinez@example.com",
        "hashedPassword": bcrypt.hashSync("M@rt1n3zB3n")
      },
      {
        "firstName": "Avery",
        "lastName": "Robinson",
        "username": "averyr",
        "email": "avery.robinson@example.com",
        "hashedPassword": bcrypt.hashSync("R0b!ns0nAv3ry")
      },
      {
        "firstName": "Alexander",
        "lastName": "Clark",
        "username": "alexclark",
        "email": "alexander.clark@example.com",
        "hashedPassword": bcrypt.hashSync("Cl@rkAl3x@nd3r")
      },
      {
        "firstName": "Harper",
        "lastName": "Rodriguez",
        "username": "harper_rod",
        "email": "harper.rodriguez@example.com",
        "hashedPassword": bcrypt.hashSync("R0dr1gu3zH@rp3r")
      },
      {
        "firstName": "Daniel",
        "lastName": "Lee",
        "username": "danlee",
        "email": "daniel.lee@example.com",
        "hashedPassword": bcrypt.hashSync("L33D@ni3l")
      },
      {
        "firstName": "Elizabeth",
        "lastName": "Lewis",
        "username": "ellewis",
        "email": "elizabeth.lewis@example.com",
        "hashedPassword": bcrypt.hashSync("L3w!s3l!z@b3th")
      },
      {
        "firstName": "Evelyn",
        "lastName": "Walker",
        "username": "evewalk",
        "email": "evelyn.walker@example.com",
        "hashedPassword": bcrypt.hashSync("W@lk3rEv3lyn")
      },
      {
        "firstName": "Logan",
        "lastName": "Hall",
        "username": "loganh",
        "email": "logan.hall@example.com",
        "hashedPassword": bcrypt.hashSync("H@llL0g@n")
      },
      {
        "firstName": "Grace",
        "lastName": "Allen",
        "username": "grace_a",
        "email": "grace.allen@example.com",
        "hashedPassword": bcrypt.hashSync("All3nGr@ce")
      },
      {
        "firstName": "Chloe",
        "lastName": "Young",
        "username": "chloey",
        "email": "chloe.young@example.com",
        "hashedPassword": bcrypt.hashSync("Y0ungChl03")
      },
      {
        "firstName": "Carter",
        "lastName": "Hernandez",
        "username": "carterh",
        "email": "carter.hernandez@example.com",
        "hashedPassword": bcrypt.hashSync("H3rn@nd3zC@rt3r")
      },
      {
        "firstName": "Zoey",
        "lastName": "King",
        "username": "zoey_k",
        "email": "zoey.king@example.com",
        "hashedPassword": bcrypt.hashSync("K!ngZo3y")
      },
      {
        "firstName": "Jayden",
        "lastName": "Wright",
        "username": "jayw",
        "email": "jayden.wright@example.com",
        "hashedPassword": bcrypt.hashSync("Wr!ghtJ@yd3n")
      }
    ]
    , {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Users';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, {
      username: {
        [Op.in]: ['JonTabiendo', 'IAmATrex', 'DatTabiendo', "Demo-Lition"]
      }
    }, {})
  }
};
