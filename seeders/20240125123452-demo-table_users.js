"use strict";




/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     
    */

    const bcrypt = require("bcryptjs");
    const salt = bcrypt.genSaltSync(10);
    let hashpassword = ""

    await queryInterface.bulkInsert(
      "table_users",
      [
        {
          email: "Nghia2@gmail.com",
          username: "Fake2",
          password:  hashpassword = bcrypt.hashSync("thn0608982", salt),
          status: "pending",
          token: "",
        },
        {
          email: "Nghia3@gmail.com",
          username: "Fake3",
          password: hashpassword = bcrypt.hashSync("thn0608983" , salt),
          status: "pending",
          token: "",
        },
        {
          email: "Nghia4@gmail.com",
          username: "Fake4",
          password:  hashpassword = bcrypt.hashSync("thn0608984" , salt),
          status: "pending",
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
