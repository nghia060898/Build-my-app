const { users } = require("../model/usersModel");
const usersService = require("../service/userService");

const handleHelloWork = function () {
  return {
    getHomePage: (req, res) => {
      res.render("home.ejs");
    },
    getUserPage: (req, res) => {
      res.render("user.ejs");
    },
    signup: (req, res) => {
      const email = req.body.email;
      const username = req.body.username;
      const phone = req.body.phone;
      const password = req.body.password;
      const repassword = req.body.repassword;

      if (!email || email.length === 0) {
        return res.send({ s: 400, msg: "Invalid Email" });
      }
      if (!username || username.length === 0) {
        return res.send("Invalid User Name");
      }
      if (!phone || phone.length < 10 || phone.length > 12) {
        return res.send("Invalid Phone");
      }
      if (!password || password.length < 6) {
        return res.send("Invalid Password");
      }
      if (repassword !== password) {
        return res.send("Repassword false");
      }

      // const comparepassword = bcrypt.compareSync(password, hashpassword); // true

      usersService.create(email, username, password, phone);
      console.log("Ok");
      return res.send("User Controller");
    },

    getInfoSchema: async (req, res) => {
      const info = await users.find({});
      try {
        console.log(info);
        return res.send("Get Success");
      } catch (error) {
        console.log(error.stack);
      }
      // usersService.get
    },
  };
};

module.exports = new handleHelloWork();
