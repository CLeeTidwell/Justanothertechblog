const { User } = require('../models');

const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@test.com",
    password: "password12345",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@test.com",
    password: "password123456",
  },
  {
    id: 3,
    name: "Merkle",
    email: "Merkle@test.com",
    password: "password1234567",
  },
  {
    id: 4,
    name: "Amber",
    email: "amber@test.com",
    password: "password1234567",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;