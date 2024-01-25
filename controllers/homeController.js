
const usersService = require("../service/userService");
// const mysql = require('mysql');


const handleHelloWork = function () {
  return {
    getHomePage: (req, res) => {
      res.render("home.ejs");
    },
    getUserPage: (req, res) => {
      res.render("user.ejs");
    },
    signup: async (req, res) => {

      

      await usersService.insertlistUser(req, res)
      
      return res.send("User Controller");
    }
  };
      // let createnewUser = [];

      // const comparepassword = bcrypt.compareSync(password, hashpassword); // true
      // createnewUser = await usersService.createNew(req, res);
   
  };


module.exports = new handleHelloWork();
