
const usersService = require("../service/userService");


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

   
  };


module.exports = new handleHelloWork();
