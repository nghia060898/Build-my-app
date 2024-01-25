"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     
    */

    await queryInterface.bulkInsert(
      "table_users",
      [
        {
          email: "Nghia2@gmail.com",
          username: "Fake2",
          password: "thn0608982",
          status: "",
          token: "",
        },
        {
          email: "Nghia3@gmail.com",
          username: "Fake3",
          password: "thn0608983",
          status: "",
          token: "",
        },
        {
          email: "Nghia4@gmail.com",
          username: "Fake4",
          password: "thn0608984",
          status: "",
          token: "",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
