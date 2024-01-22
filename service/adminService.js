const { users } = require("../model/usersModel");

const adminServices = function () {
  return {
    getlistUsers: async (req, res) => {
      let list = [];
      const info = await users.find({});
      try {
        list = info;
        return list;
      } catch (error) {
        console.log(error.stack);
      }
      // usersService.get
    },
  };
};

module.exports = new adminServices();
