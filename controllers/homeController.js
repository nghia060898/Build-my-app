const handleHelloWork = function () {
  return {
    getHomePage: (req, res) => {
      res.render("home.ejs");
    },
    getUserPage: (req, res) => {
      res.render("user.ejs");
    },
  };
};

module.exports = new handleHelloWork();
