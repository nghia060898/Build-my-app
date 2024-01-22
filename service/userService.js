const { users } = require("../model/usersModel");
const bcrypt = require("bcryptjs");

const usersService = function () {
  return {
    // hashpassword: (password) => {

    //   console.log(hashpassword);
    //   return hashpassword;
    // },
    create: (email, username, password, phone) => {
      const salt = bcrypt.genSaltSync(10);
      const hashpassword = bcrypt.hashSync(password, salt);
      // const info = users
      //   .create({
      //     email: email,
      //     username: username,
      //     phone: phone,
      //     password: hashpassword,
      //   })
      //   .then(() => {
      //     console.log(`create user success ${info}`);
      //   })
      //   .catch((err) => {
      //     console.log(err.stack);
      //   });

      console.log(hashpassword);
    },

    get: async () => {
     

  },
}};

module.exports = new usersService();
